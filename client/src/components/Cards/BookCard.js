import React from "react";
import "./card.css";
import gizem from "../../assets/drawings/gizem.jpg";

export const BookCard = ({ book }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" className="overflow" src={gizem} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.review}</Card.Text>
        <Button variant="primary">See full page</Button>
      </Card.Body>
    </Card>
  );
};
