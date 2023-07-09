import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <Navbar expand="sm" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/form">Share Your Experience</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
