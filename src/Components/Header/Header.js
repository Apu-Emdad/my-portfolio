import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const { HashLink } = require("react-router-hash-link");

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
        className="Header"
      >
        <Container>
          <Navbar.Brand href="/home#intro">Emdadul Haque</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/home#intro">Home</Nav.Link>
              <Nav.Link href="/home#about">About</Nav.Link>
              <Nav.Link href="/home#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/home#contact">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
