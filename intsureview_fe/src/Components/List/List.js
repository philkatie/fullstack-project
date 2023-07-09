import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './List.css';

export default function List() {

    const [info, setInfo] = useState([]);

    const getInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/')
        console.log(response.data.results)
        setInfo(response.data.results);
      } catch (error) {
        console.error('Error retrieving info:', error);
      }
    }

    useEffect(() => {
        getInfo();
    }, [])

    return (
      <Container className="my-5">
      <Row>
        {info.map((i) => (
          <Col key={i.id} sm={12} md={4}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>{i.name}</Card.Title>
                <Card.Text>{i.email}</Card.Text>
                <Card.Text>{i.streetAddress}</Card.Text>
                <Card.Text>{i.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    );
}