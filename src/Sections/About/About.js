import React from "react";
import med from '../../assets/images/med.jpg'
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <Container className="about-section py-5" id='About'>
      <Row className="align-items-center flex-md-row flex-nowrap">
        <Col md={6} xs={6} className="d-flex justify-content-center">
          <motion.img
            src={med} 
            alt="Club"
            className="img-fluid shadow about-image trapezoid"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </Col>
        <Col md={6} xs={6} className="d-flex align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="about-title">who we are</h2>
            <p className="about-text">
            Innovate-x is a scientific club affiliated with the Faculty of Medicine, created by pharmacy students at Saad Dahlab University in Blida. It aims to focus on activities related to the medical and scientific field for pharmacy students in order to bring together the experiences of different stages and exchange information and ideas.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;