import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        </Container>
      </Jumbotron>
    );
  }
}
