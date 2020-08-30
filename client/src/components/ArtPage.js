import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArtCard } from "./Cards/ArtCard";

export const Art = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/art").then((res) => setArts(res.data));
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        {arts.map((art, index) => (
          <div className="col-xl-4" key={index}>
            <ArtCard art={art} />
          </div>
        ))}
      </div>
    </div>
  );
};
