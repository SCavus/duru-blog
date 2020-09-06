import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./card.css";
import lilac from "./../../assets/drawings/lilac.jpg";
import { SingleArt } from "../SinglePage/SingleArt";

export const ArtCard = ({ art }) => {
  return (
    <div className="art-card">
      <div>
        <img src={lilac} className="card-image-top" alt="art_piece" />
      </div>
      <div>
        <h3>{art.title}</h3>
      </div>
      <div className="card-text">
        <p>{art.text}</p>
      </div>
      <Button onclick={() => setArt()} art={art}>
        See full
      </Button>
    </div>
  );
};


<Router>
  <Switch>
    <Route path="/art/:artid" component={SingleArt} />
  </Switch>
</Router>