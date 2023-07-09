import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import styles from './Main.css';

// probably in a more robust app I would make the form its own component and make "main" a more flexible 
// component that could easily contain other content. But for this project I'm gonna leave it as is.

export default function Main() {

  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [investigationRequested, setInvestigationRequested] = useState(true);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  // feels like there is probably a way to standardize this function to be reusable
  // not going to worry about it now but copying it five times is not, generally, The Move
  const handleName = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleInvestigationRequested = (e) => {
    setInvestigationRequested(e.target.value);
  }

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Please enter your name.');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      let formField = new FormData();
      formField.append('name', name);
      formField.append('street_address', streetAddress);
      formField.append('email', email);
      formField.append('description', description);
      formField.append('investigation_requested', investigationRequested);

      await axios({
        method: 'post',
        url: 'http://localhost:8000/api/',
        data: formField
      }).then((response) => {
        console.log(response.status);
        console.log(response.data);
        navigate('/');
      })
    }
  };

  return (
    <Container className='my-5 py-4 my-form'>
      <Row className='px-4 my-4'>
        <h1 className='title'>Phantom Finders</h1>
      </Row>
      <Row className='px-4 my-3 copy'>
        <p>Are unexplained bumps in the night giving you goosebumps? Do you sense an eerie presence lingering in your home? Fear not, 
          for Phantom Finders is here to save the day! With our unwavering passion for the paranormal, we are the go-to professionals 
          to uncover the truth behind mysterious happenings.</p>
        <p>Don't let the unknown consume you. Contact Phantom Finders today to schedule a consultation. Together, we'll banish those 
          mischievous apparitions and make your home a sanctuary once more!</p>
      </Row>
      <Row className='px-4 my-3'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Name"
              value={name}
              onChange={handleName}
              isInvalid={!!nameError}
            />
            <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group 
            className="mb-3" 
            controlId="formBasicAddress"
            value={streetAddress}
            onChange={handleStreetAddress}>
            <Form.Label>Street Address</Form.Label>
            <Form.Control 
              required
              type="address" 
              placeholder="Street Address" 
            />
          </Form.Group>


          <Form.Group 
            className="mb-3" 
            controlId="formBasicText"
            value={description}
            onChange={handleDescription}>
            <Form.Label>Describe any previous paranormal activity at this location:</Form.Label>
            <Form.Control as="textarea" placeholder="Type here" />
          </Form.Group> 

          <Form.Group 
            className="mb-3 custom-select" 
            controlId="formBasicSelect"
            value={investigationRequested}
            onChange={handleInvestigationRequested}>
            <Form.Label>Would you like Phantom Finders to investigate your location?</Form.Label>
            <Form.Select className="form-control">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}