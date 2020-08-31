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
      <div class="card-columns">
        {arts.map((art, index) => (
          <div key={index} class="card bg-primary">
            <ArtCard art={art} />
          </div>
        ))}
      </div>
    </div>
  );
};
