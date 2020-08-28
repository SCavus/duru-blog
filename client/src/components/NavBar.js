import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #303c6c;
  }

  .navbar-brand {
    color: #f5ecc1;
    &:hover {
      color: #bbb;
    }
  }

  #nav-link {
    color: #f5ecc1;
    &:hover {
      color: #bbb;
    }
`;

export const NavBar = () => {
  return (
    <Styles>
      <Navbar expand="md">
        <Navbar.Brand href="#home">Duru's Wonderland</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="ml-auto">
          <Nav.Link id="nav-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link id="nav-link" href="/art">
            Art
          </Nav.Link>
          <Nav.Link id="nav-link" href="/books">
            Books
          </Nav.Link>
          <Nav.Link id="nav-link" href="/about">
            About
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </Styles>
  );
};
