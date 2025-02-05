import React from 'react';
import './Event.css';
import { Container, Row, Col } from 'react-bootstrap';
import med from '../../assets/images/med.jpg'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Openday',
      date: '?',
      location: 'Medicine Faculty',
      description: '',
    },
   
  ];

  return (
    <Container className="roadmap-container" id='Events'>
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="roadmap">
        {events.map((event, index) => (
          <div key={event.id} className="roadmap-event">
            <div className="roadmap-circle">
              <span>{index + 1}</span>
            </div>
            <div className="roadmap-content">
              <h3>{event.title}</h3>
              <p className="date-time">{event.date} - {event.time}</p>
              <p>{event.description}</p>
              <p className="location">{event.location}</p>
            </div>
            {index < events.length - 1 && <div className="roadmap-line"></div>}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Events;
