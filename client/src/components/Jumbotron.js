import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import boat from '../assets/boat.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boat}) no-repat fix bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo clasName="jumbo">
      <div className="overlay">
        <Container>
          <h2>Welcome</h2>
          <p>Join me in my journey</p>
        </Container>
      </div>
    </Jumbo>
  </Styles>
);
