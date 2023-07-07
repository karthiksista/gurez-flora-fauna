import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="footer" className="mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Shina Cultural Center</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Shina Cultural Center</li>
              {/* <li>Phone: +1 123-456-7890</li> */}
              <li>Email: info@example.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
