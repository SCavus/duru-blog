import React from "react";
import "./card.css";
import gizem from "../../assets/drawings/gizem.jpg";
import { Button } from "react-bootstrap";


export const BookCard = ({ book }) => {
  return (
    <div className='art-card'>
      <div>
        <img src={gizem} className='card-image-top' alt="art_piece" />
      </div>
      <div>
        <h3>{book.title}</h3>
      </div>
      <div className='card-text'>
        <p>{book.review}</p>
      </div>
      <Button>See full</Button>
    </div>
  );
};
