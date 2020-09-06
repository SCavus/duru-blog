import React, { useState } from "react";

export const SingleArt = ({ art }) => {
  return;
  <div>
    <div>
      <img src={art.url} alt="art_image" />
    </div>
    <h3>{art.title}</h3>
    <div>{art.text}</div>
  </div>;
};
