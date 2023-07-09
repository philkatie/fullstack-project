import React from 'react'
import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <footer className='py-3 bg-dark fixed-bottom'>
        <Container className='px-4 text-center text-white'>
            Copyright &copy; Phantom Finders 2023
        </Container>
    </footer>
  )
}
