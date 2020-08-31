import React from "react";
import "./card.css";
import lilac from "./../../assets/drawings/lilac.jpg";
import { Card, Button } from "react-bootstrap";

export const ArtCard = ({ art }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" className="overflow" src={lilac} />
      <Card.Body>
        <Card.Title>{art.title}</Card.Title>
        <Card.Text>{art.info}</Card.Text>
        <Button variant="primary">See full page</Button>
      </Card.Body>
    </Card>
  );
};
