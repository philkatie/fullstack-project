import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import styles from './Detail.css';


export default function Detail() {
    const [info, setInfo] = useState("");
    const navigate = useNavigate();

    const getInfo = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`);
        setInfo(data);
    }

    const {id} = useParams();

    useEffect(() => {
        getInfo();
    }, [])


    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:8000/api/${id}`);
        navigate('/');
    }


    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col sm={12} md={4}>
                        <Card className="my-3">
                            <Card.Body>
                              <Card.Title>{info.name}</Card.Title>
                              <Card.Text>{info.email}</Card.Text>
                              <Card.Text>{info.streetAddress}</Card.Text>
                              <Card.Text>{info.description}</Card.Text>
                              <NavLink className="btn btn-primary" to={`/${info.id}/update`}>Update</NavLink>
                              <NavLink className="btn btn-primary" onClick={() => deleteProduct(info.id)}>Delete</NavLink>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
