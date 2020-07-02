import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Pics
import GitPic from "./pics/github.svg";
import LIPic from "./pics/linkedin.svg";
import ResPic from "./pics/resume.svg";
import ConPic from "./pics/email.svg";
import QuePic from "./pics/question.svg";
import ProPic from "./pics/project.svg";

export default class Navi extends Component {
  render() {
    return (
      <Navbar sticky="top" expand="lg" className="navBarMod">
        <Container fluid className="navRow">
          <Row className="navRow">
            <Col className="navCol">
              <a href="#aboutMe" className="navCol">
                <img className="devLinkImage" src={QuePic} alt="AboutMe Logo" />
              </a>
            </Col>
            <Col className="navCol">
              <a href="#projectsJumbo" className="navCol">
                <img
                  className="devLinkImage"
                  src={ProPic}
                  alt="Projects Logo"
                />
              </a>
            </Col>
            <Col className="navCol">
              <a href="https://github.com/Messier81" className="navCol">
                <img className="devLinkImage" src={GitPic} alt="GitHub Logo" />
              </a>
            </Col>
            <Col className="navCol">
              <a
                href="https://www.linkedin.com/in/sivanesan-vettivel-992318182/"
                className="navCol"
              >
                <img className="devLinkImage" src={LIPic} alt="LinkedIn Logo" />
              </a>
            </Col>
            <Col className="navCol">
              <a href="#aboutMe" className="navCol">
                <img className="devLinkImage" src={ResPic} alt="Resume Logo" />
              </a>
            </Col>
            <Col className="navCol">
              <a href="#aboutMe" className="navCol">
                <img
                  className="devLinkImage"
                  src={ConPic}
                  alt="ContactMe Logo"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}
