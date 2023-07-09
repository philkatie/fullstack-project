import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import styles from './header.css';

export default function Header() {
    return (
        <Navbar expand="sm" className="custom-navbar">
          <Container>
            <Navbar.Brand className="custom-brand">
              <FontAwesomeIcon icon={faGhost} className="ghost-icon" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link custom-nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link custom-nav-link" to="/form">Share Your Experience</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
