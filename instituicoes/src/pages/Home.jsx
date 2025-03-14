import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <Container>
      {}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="saladeaula"
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagem1"
          />
          <Carousel.Caption>
            <h3>Bem-vindo ao Sistema de Instituições</h3>
            <p>Gerencie instituições de ensino de forma eficiente.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="livro"
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagem2"
          />
          <Carousel.Caption>
            <h3>Explore as Funcionalidades</h3>
            <p>Descubra como nosso sistema pode ajudar sua instituição.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="estudante"
            src="https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="imagem3"
          />
          <Carousel.Caption>
            <h3>Relatórios Detalhados</h3>
            <p>Acesse relatórios completos sobre suas instituições.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {}
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Instituições</Card.Title>
              <Card.Text>Gerencie as instituições de ensino.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Relatórios</Card.Title>
              <Card.Text>Visualize relatórios detalhados.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Configurações</Card.Title>
              <Card.Text>Configure o sistema conforme necessário.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;