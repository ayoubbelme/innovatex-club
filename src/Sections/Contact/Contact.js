import React from 'react';
import './Contact.css';
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa'; // Import Telegram and TikTok icons

const Contact = () => {
  return (
    <div className="contact-container" id='Contact'>
      <h2>Contact Us</h2>
      <p>Stay connected with us through our social media.</p> {/* Updated text */}

      <div className="contact-links">
        <a href="https://www.instagram.com/innovatex_club/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" /> Instagram
        </a>

        <a href="https://www.facebook.com/profile.php?id=61572452284348" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="contact-icon" /> Facebook
        </a>

        <a href="https://t.me/+GxUZskdEbFtkOWU0" target="_blank" rel="noopener noreferrer"> {/* Add your Telegram link */}
          <FaTelegram className="contact-icon" /> Telegram
        </a>

        <a href="https://www.tiktok.com/@innovatex.club?_t=ZM-8tf1i24TWnF&_r=1" target="_blank" rel="noopener noreferrer"> {/* Add your TikTok link */}
          <FaTiktok className="contact-icon" /> TikTok
        </a>
      </div>
    </div>
  );
};

export default Contact;