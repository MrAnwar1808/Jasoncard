import React, { useState } from "react";
import "./Productcard.css";

const images = [
  { id: 1, Image: "./keyboardcover.jpg", name: "keyboardcover" },
  { id: 2, Image: "./keyboardcover.jpg", name: "cover" },
  { id: 3, Image: "./keyboardcover.jpg", name: "system keyboard" },
];

function Productcard() {
  const [search, setSearch] = useState("");

  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="productcard-container">
      <input
        type="text"
        placeholder="Search images"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="images-container">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <img src={image.Image} alt={image.name} className="product-image" />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productcard;
