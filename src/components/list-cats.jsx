import React, { useState, useEffect } from "react";
import'./../components/cast.style.css'

function ListCats() {
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch(`cast.json`);
    setCast(await response.json());
    console.log(cast);
  }

  useEffect(() => {
    fetchCast();
  }, []);
  return (
    <div id="cast-item-container" >
      {cast.map((castItems, index) => {
        const castId = castItems.id;
        const castName = castItems.name;

        return (
          <div id="cast-item" key={index}>
            <img src={`images/${castItems.slug}_tn.svg`} alt="" />
            <p>
              id: {castId}, Name: {castName}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ListCats;
