import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import styles from './List.css';

// this component is 100% selfish, it was easier to see if the form was working and
// sending info to the back end when the content was flowing to the front end
// but it also sets up nicely for additional future endpoints like PUT/DELETE
// as well as an easy way to access a details page about a particular haunting.

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
                <NavLink className="btn btn-primary" to={`/${i.id}`}>Details</NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    );
}
