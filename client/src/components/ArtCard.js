import React from "react";

export const ArtCard = ({ art }) => {
  console.log(art);
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={art.url} alt="art_image" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card title">{art.title}</h4>
        <p className="card-text text-secondary">{art.info}</p>
      </div>
    </div>
  );
};

