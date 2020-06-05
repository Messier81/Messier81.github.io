import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class Front extends Component {
  render() {
    return (
      <div className="frontMain">
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron fluid className="mainJumbo">
          <Container className="mainCont">
            <Row>
              <Col className="myName">Nesan V.</Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto" className="myDesc">
                Developer | Musician | Writer
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="light">GitHub</Button>
              </Col>
              <Col>
                <Button variant="light">LinkedIn</Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
