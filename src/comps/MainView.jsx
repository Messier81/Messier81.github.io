import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class MainView extends Component {
  render() {
    return (
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
    );
  }
}
