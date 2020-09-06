import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
// import boat from "../../src/boat.jpg";

const Styles = styled.div`
  .jumbo {
    background-image: url("/src/boat.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -80%);
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo className="jumbo">
      <Container className="overlay">
        <h2>Welcome</h2>
        <p>Join me in my journey</p>
      </Container>
    </Jumbo>
  </Styles>
);
