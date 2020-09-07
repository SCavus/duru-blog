import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./card.css";
import gizem from "../../assets/drawings/gizem.jpg";

export const BookCard = ({ book }) => {
  const bookId = book._id;

  return (
    <div className="art-card">
      <div>
        <img src={gizem} className="card-image-top" alt="art_piece" />
      </div>
      <div>
        <h3>{book.title}</h3>
      </div>
      <div className="card-text">
        <p>{book.review}</p>
      </div>
      <Button>
        <Link to={{ pathname: `http://localhost:5001/api/books/${bookId}` }} />
      </Button>
    </div>
  );
};
