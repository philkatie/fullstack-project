import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import styles from './Update.css';


export default function Update() {

    const [name, setName] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [investigationRequested, setInvestigationRequested] = useState(true);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const {id} = useParams();

    const loadInfo = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`);
        console.log(data);
        setName(data.name);
        setStreetAddress(data.street_address);
        setEmail(data.email);
        setDescription(data.description);
        setInvestigationRequested(data.investigation_requested);
    }

    useEffect(() => {
        loadInfo();
    }, [])

    const handleName = (e) => {
        setName(e.target.value);
        setNameError('');
    };

    const handleStreetAddress = (e) => {
        setStreetAddress(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleInvestigationRequested = (e) => {
        setInvestigationRequested(e.target.value);
    };

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            let formField = new FormData();
            formField.append('name', name);
            formField.append('street_address', streetAddress);
            formField.append('email', email);
            formField.append('description', description);
            formField.append('investigation_requested', investigationRequested);
            await axios({
                method: 'put',
                url: `http://localhost:8000/api/${id}/`,
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
                <p>Have you ever experienced unexplained phenomena that sent shivers down your spine? At Phantom Finders,
                we are fascinated by the mysteries of the paranormal. Share your own encounters or stories of supernatural
                encounters in your home.</p>
                <p>Our team of dedicated investigators will listen to your experiences and provide insights into the unexplained.
                If you're open to it, we may even contact you to discuss the possibility of further investigation to shed light
                on the mysteries surrounding your property.</p>
                <p>Don't let unanswered questions linger. Join the Phantom Finders community and unravel the secrets of the unknown.
                Submit your information or stories today and embark on a journey into the realm of the paranormal.</p>
            </Row>
            <Row className='px-4 my-3'>
                <Form onSubmit={handleUpdate}>
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
                        controlId="formBasicAddress">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                            required
                            type="address"
                            value={streetAddress}
                            onChange={handleStreetAddress}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicText">
                        <Form.Label>Describe any previous paranormal activity at this location:</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Type here"
                            value={description}
                            onChange={handleDescription}/>
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
