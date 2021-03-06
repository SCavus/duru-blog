import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArtCard } from "./Cards/ArtCard";
// import { } from "react-bootstrap";

export const Art = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/art").then((res) => setArts(res.data));
  }, []);

  return (
    <div className="row">
      {arts.map((art, index) => (
        <ArtCard key={index} art={art} className="col-md-4" />
      ))}
    </div>
  );
};
