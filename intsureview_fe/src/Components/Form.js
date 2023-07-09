import React, {useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// probably in a more robust app I would make the form its own component and make "main" a more flexible 
// component that could easily contain other content. But for this project I'm gonna leave it as is.

export default function Main() {

  const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [experiencedActivity, setExperiencedActivity] = useState(false);
  // const [activityDescription, setActivityDescription] = useState("");

  // feels like there is probably a way to standardize this function to be reusable
  // not going to worry about it now but copying it five times is not, generally, The Move
  const handleName = (e) => {
    setName(e.target.value);
  }

  // const handlePhoneNumber = (e) => {
  //   setPhoneNumber(e.target.value);
  // }

  // const handleAddress = (e) => {
  //   setAddress(e.target.value);
  // }

  // const handleExperiencedActivity = (e) => {
  //   setExperiencedActivity(e.target.value);
  // }

  // const handleActivtyDescription = (e) => {
  //   setActivityDescription(e.target.value);
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/forms/create', {
        name,
        // phoneNumber,
        // address,
        // experiencedActivity,
        // activityDescription,
      });

      console.log('Form submitted successfully!', response.data);
    } catch (error) {
      console.error('Error submitting form:', error.response.data);
    }
  };

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
          <Form.Group 
            className="mb-3" 
            controlId="formBasicName"
            value={name}
            onChange={handleName}>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              required
              type="name" 
              placeholder="Name" 
            />
          </Form.Group>

          {/* <Form.Group 
            className="mb-3" 
            controlId="formBasicInput"
            value={phoneNumber}
            onChange={handlePhoneNumber}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group 
            className="mb-3" 
            controlId="formBasicAddress"
            value={address}
            onChange={handleAddress}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Address" />
          </Form.Group>

          <Form.Group 
            className="mb-3" 
            controlId="formBasicCheckbox"
            value={experiencedActivity}
            onChange={handleExperiencedActivity}>
            <Form.Label>Have you experienced paranormal activity at this location before?</Form.Label>
            <Form.Check type="checkbox" label="Yes" />
          </Form.Group>

          <Form.Group 
            className="mb-3" 
            controlId="formBasicText"
            value={activityDescription}
            onChange={handleActivtyDescription}>
            <Form.Label>Describe any previous paranormal activity at this location:</Form.Label>
            <Form.Control as="textarea" placeholder="Type here" />
          </Form.Group> */}

          <Button 
            variant="primary" 
            type="submit"
            onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
