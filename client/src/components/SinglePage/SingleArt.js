import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const params = useParams();

export const SingleArt = () => {
  const [art, setArt] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/art/${params.artId}`)
      .then((res) => setArt(res.data));
  }, []);

  return (
    <div className="card">
      <div className="card-img-top">
        <img src={art.url} alt="art_image" className="img-overflow" />
      </div>
      <h3>{art.title}</h3>
      <div className="card-text">{art.text}</div>
    </div>
  );
};
