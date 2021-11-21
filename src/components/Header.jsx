import React from "react";
import { Link } from "react-router-dom"

import { Navbar, Container, Nav,  } from "react-bootstrap";
import { Github, House, Search } from 'react-bootstrap-icons';
import style from "./Header.module.css";

const Header = () => {
  return (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/"><Github variant="light" size="1.7rem"/> &nbsp; GitHubSearcher</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className={`${style.link} mx-3`}>
            <House size="1.3rem" /> Home
          </Link>
          <Link to="/search" className={`${style.link} mx-3`}>
            <Search size="1.3rem" /> Search
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}

export default Header;