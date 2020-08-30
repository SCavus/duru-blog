import React from "react";
import "./card.css";
// import lilac from "./../../assets/drawings/lilac.jpg";

export const ArtCard = ({ art }) => {
  console.log(art);
  return (
    <div className="card text-left shadow">
      <div className="overflow">
        <img src={art.url} alt="art_image" className="card-image-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card title">{art.title}</h4>
        <p className="card-text text-secondary">{art.info}</p>
      </div>
    </div>
  );
};
