import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.css';

export default function Footer() {
  return (
    <div className='px-4 text-center text-white py-3 fixed-bottom footer'>
      <div className='social-icons mb-3'>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p className='mb-0'>Copyright &copy; Phantom Finders 2023</p>
    </div>
  );
}