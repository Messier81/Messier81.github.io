import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Images
import ReactLogo from "./pics/react.svg";
import BootstrapLogo from "./pics/bootstrap.svg";
import JSLogo from "./pics/javascript.svg";
import HTML5Logo from "./pics/html5.svg";
import CSS3Logo from "./pics/css3.svg";

export default class Projects extends Component {
  render() {
    return (
      <Jumbotron className="projJumbo" id="projectsJumbo">
        <Container fluid>
          <Row className="projNFL">
            <Col sm={7} className="projName">
              <a href="https://messier81.github.io/Reddit-Image-Viewer/">
                <span>R</span>eddit&nbsp;<span>I</span>mage&nbsp;
                <span>V</span>iewer
              </a>
            </Col>
            <Col>
              <img className="usedFL" src={ReactLogo} alt="React Logo" />
            </Col>
            <Col>
              <img
                className="usedFL"
                src={BootstrapLogo}
                alt="Bootstrap Logo"
              />
            </Col>

            <Col>
              <img className="usedFL" src={JSLogo} alt="JavaScript Logo" />
            </Col>
            <Col>
              <img className="usedFL" src={HTML5Logo} alt="HTML5 Logo" />
            </Col>
            <Col>
              <img className="usedFL" src={CSS3Logo} alt="CSS3 Logo" />
            </Col>
          </Row>
          <Row className="projDesc">
            <Col className="projSum">
              RIV (Reddit Image Viewer) is a fully front-end web application
              that allows the user to browse subreddits on the website
              Reddit.com and to view only the images posted on them. Build with
              React and Bootstrap, this site clears all ads, comments, and
              everything else to display only the images.
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
