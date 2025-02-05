import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} className="mb-3 mb-md-0">
            <h5 className="text-white">About Us</h5>
            <p className="font-grey">
              We are a passionate team dedicated to providing high-quality products/services. Learn more about our mission and values.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61572452284348" target='_blank' rel="noopener noreferrer" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/innovatex_club/" target='_blank' rel="noopener noreferrer" className="text-white me-2"><i className="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@innovatex.club?_t=ZM-8tf1i24TWnF&_r=1" target='_blank' rel="noopener noreferrer" className="text-white me-2"><i className="fab fa-tiktok"></i></a>
              <a href="https://t.me/+GxUZskdEbFtkOWU0" target='_blank' rel="noopener noreferrer" className="text-white me-2"><i className="fab fa-telegram"></i></a>
              
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-3 mb-md-0">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="font-grey">Home</a></li>
              <li><a href="#Team" className="font-grey">Team</a></li>
              <li><a href="#FAQ" className="font-grey">FAQ</a></li>
              <li><a href="#Contact" className="font-grey">Contact Us</a></li>
            </ul>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <h5 className="text-white">Contact Us</h5>
            <ul className="list-unstyled">
              <li><span className="font-grey">Email:</span> <span className='text-secondary'>innovatexclub2024@gmail.com</span></li>
              <li><span className="font-grey">Address:</span> <span className='text-secondary'>Saad Dahlab,Blida</span></li>
            </ul>
          </Col>
        </Row>
        <div className="text-center font-grey border-top py-2">
          &copy; {currentYear} Designed and developed by <a href='https://www.instagram.com/ay.oub514/' target='_blank' rel="noopener noreferrer">Ayoub Blm</a>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;