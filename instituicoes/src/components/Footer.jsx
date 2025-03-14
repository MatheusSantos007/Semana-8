import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5>Links Rápidos</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/institutions">Instituições</Link></li>
            </ul>
          </Col>

          <Col md={4} className="footer-section">
            <h5>Redes Sociais</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </Col>

          <Col md={4} className="footer-section">
            <h5>Contato</h5>
            <ul className="footer-contact">
              <li>Rua das Instituições, 123</li>
              <li>contato@instituicoes.com</li>
              <li>(11) 99999-9999</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Instituições de Ensino
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;