import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Main() {
  return (
    <Container className='my-5 py-4'>
      <Row className='px-4 my-4'>
        <h1>Phantom Finders</h1>
      </Row>
      <Row className='px-4 my-3'>
        <p>Are unexplained bumps in the night giving you goosebumps? Do you sense an eerie presence lingering in your home? Fear not, 
          for Phantom Finders is here to save the day! With our unwavering passion for the paranormal, we are the go-to professionals 
          to uncover the truth behind mysterious happenings.</p>
        <p>Don't let the unknown consume you. Contact Phantom Finders today to schedule a consultation. Together, we'll banish those 
          mischievous apparitions and make your home a sanctuary once more!</p>
      </Row>
      <Row className='px-4 my-3'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Have you experienced paranormal activity at this location before?</Form.Label>
            <Form.Check type="checkbox" label="Yes" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Describe any previous paranormal activity at this location:</Form.Label>
            <Form.Control as="textarea" placeholder="Type here" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
