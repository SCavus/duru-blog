import React from "react";
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./card.css";
import lilac from "./../../assets/drawings/lilac.jpg";

export const ArtCard = ({ art }) => {
  const artId = art._id;

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
      <Button >
        <Link to={{ pathname: `/art/${artId}` }} />
      </Button>
    </div>
  );
};

// <Router>
//   <Switch>
//     <Route path="/art/:artid" component={SingleArt} />
//   </Switch>
// </Router>
