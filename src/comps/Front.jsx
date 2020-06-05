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
        <Navbar sticky="top" expand="lg" className="navBarMod">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className="navLi">
                Projects
              </Nav.Link>
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
                Developer &middot; Musician &middot; Writer
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Button
                  href="https://github.com/Messier81"
                  variant="light"
                  className="socBut"
                >
                  GITHUB
                </Button>
              </Col>
              <Col xs="auto">
                <Button
                  href="https://www.linkedin.com/in/sivanesan-vettivel-992318182/"
                  variant="light"
                  className="socBut"
                >
                  LINKEDIN
                </Button>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
