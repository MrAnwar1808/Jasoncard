
import React, { useState } from "react";
import './Productcard.css'

 const itemcards = [{id: 1, Image:"./keyboardcover.jpg", name: "keyboardcover" },
                    {id: 2, Image:"./keyboardcover.jpg", name: "cover" },
                    {id: 3, Image:"./keyboardcover.jpg", name: "system keyboard" }]

function Productcard(){
 const [search, setSearch] = useState("")

 const cardfilter = itemcards.filter((itemcard)=> 
    itemcard.name.toLowerCase().includes(search.toLowerCase()))
 
    return(
        <div className="card-container">   

        <input type="text"
               placeholder="search item.."
               value={search}
               onChange={(e) => setSearch(e.target.value)} 
        />


          <ul>
            {cardfilter.map((itemcard) => (
              <li key={itemcard.id}>
                  <img src={itemcard.Image} alt={itemcard.name} />
                  <p>{itemcard.name}</p>
              </li>
        ))}
      </ul>


        </div>


    )
}

export default Productcard