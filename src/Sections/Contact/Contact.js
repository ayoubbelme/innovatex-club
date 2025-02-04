import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container" id='Contact'>
      <h2>Contact Us</h2>
      <p>Stay connected with us through our social media and email.</p>

      <div className="contact-links">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" /> Instagram
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="contact-icon" /> Facebook
        </a>

        <a href="">
          <FaEnvelope className="contact-icon" /> Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
