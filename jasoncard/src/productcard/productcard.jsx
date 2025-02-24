
import React, { useState } from "react";

const Images = [{id: 1, Image:"./keyboardcover.jpg", name: "keyboardcover", },
    {id: 2, Image:"./keyboardcover.jpg", name: "cover" },
    {id: 3, Image:"./keyboardcover.jpg", name: "system keyboard" }

]



function Productcard(){
    const [search,setsearch]=useState("");

    const filterdimages=Images.filter((Images)=>
        Images.name.toLowerCase().includes(search.toLocaleLowerCase()));
    
    return(
       <div>
        <input type="text" placeholder="seach images" value={search} onChange={(e)=>setsearch(e.target.value)}/>
        {filterdimages.map((Image)=>(
            <div>
                <img src={Image.id}/>
            </div>
        ))}
       </div>
    )
}

export default Productcard