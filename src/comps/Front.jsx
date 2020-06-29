import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//Pics
import GitPic from "./pics/github.svg";
import LIPic from "./pics/linkedin.svg";

export default class Front extends Component {
  render() {
    return (
      <div className="frontMain">
        <Navbar sticky="top" expand="lg" className="navBarMod">
          <Container fluid className="navRow">
            <Row className="navRow">
              <Col className="navCol">Nesan</Col>
              <Col className="navCol">
                <img className="DevLinkImg" src={GitPic} alt="GitHub Logo" />
              </Col>
              <Col className="navCol">
                <img className="DevLinkImg" src={LIPic} alt="GitHub Logo" />
              </Col>
              <Col className="navCol">
                <img className="DevLinkImg" src={GitPic} alt="GitHub Logo" />
              </Col>
              <Col className="navCol">
                <img className="DevLinkImg" src={GitPic} alt="GitHub Logo" />
              </Col>
            </Row>
          </Container>
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

        <Jumbotron fluid className="aboutMeJumbo" id="aboutMe">
          <span className="aboutMeText">About Me</span>
          <p className="aboutMePara">
            <p>Hello there,</p>
            <p>
              I'm a recent graduate from York University with a bachelor's
              degree in Computer Science.
            </p>
            <p>
              My courses heavily focused on Computer Science, Math, and
              Philosophy.
            </p>
            <p>
              I design, build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
            <p>
              I am naturally curious, a problem solver, and a continuous
              learner.
            </p>
            <p>
              I have many years of experience in customer service as well as
              teaching, which have taught me solid communication and conflict
              resolution skills.
            </p>
            <p>
              So are you looking for a hard-working, communicative and caring
              developer?
            </p>
            <p>
              I am super excited to work on ambitious projects with positive
              people.
            </p>
            <p>
              Check out my resume and feel free to contact me at the email
              below.
            </p>
          </p>
          <p className="emailText">Email</p>
          <p className="actualEmail">nesanyorku@gmail.com</p>
        </Jumbotron>
        <Jumbotron className="projJumbo">SEE THIS</Jumbotron>
      </div>
    );
  }
}
