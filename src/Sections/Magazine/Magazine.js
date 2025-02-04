import React from 'react';
import './Magazine.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Magazine = () => {
  const magazines = [
    {
      id: 1,
      title: 'March 2024 Edition',
      date: 'March 2024',
    //   fileUrl: 'PDFS/Estimation par intervalle.pdf', 
      coverImageUrl: 'march2024cover.jpg', 
    },
   
    
  ];

  return (
    <Container className="magazine-container" id='Magazine'>
      <h2 className="text-center mb-4">Monthly Magazines</h2>
      <Row>
        {magazines.map((magazine) => (
          <Col md={4} className="mb-4" key={magazine.id}>
            <Card className="magazine-card">
              <Card.Img variant="top" src={magazine.coverImageUrl} alt={magazine.title} />
              <Card.Body>
                <Card.Title>{magazine.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{magazine.date}</Card.Subtitle>
                <Button variant="primary" href={magazine.fileUrl} target="_blank">
                  Read Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Magazine;