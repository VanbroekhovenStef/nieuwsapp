import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Link 
} from 'react-router-dom';

export default class NavbarComp extends Component {
  render() {
    return(
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
              <Navbar.Brand href="/news">Nieuwsapp</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to={"/news"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/addContent"}>Add Content</Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
  }
}