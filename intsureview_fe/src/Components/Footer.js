import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import styles from './footer.css';

export default function Footer() {
  return (
    <footer className="py-3 bg-dark fixed-bottom">
      <Container className="px-4 text-center text-white">
        <div className="social-icons mb-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p className="mb-0">Copyright &copy; Phantom Finders 2023</p>
      </Container>
    </footer>
  );
}