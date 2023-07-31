import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.css';

export function Header() {
    return (
        <header className="custom-header">
            <Container>
                <Navbar expand="sm">
                    <Navbar.Brand className="custom-brand">
                        <FontAwesomeIcon icon={faGhost} className="ghost-icon" />
                        <span className="company-name">Phantom Finders</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link custom-nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link custom-nav-link" to="/form">Share Your Experience</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}