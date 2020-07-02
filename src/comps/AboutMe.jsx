import React, { Component } from "react";
import "./Front.css";

//Bootstrap
import Jumbotron from "react-bootstrap/Jumbotron";

export default class AboutMe extends Component {
  render() {
    return (
      <Jumbotron fluid className="aboutMeJumbo" id="aboutMe">
        <span className="aboutMeText">About Me</span>
        <p className="aboutMePara">
          <p>Hello there,</p>
          <p>
            I'm a recent graduate from York University with a bachelor's degree
            in Computer Science.
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
            I am naturally curious, a problem solver, and a continuous learner.
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
            Check out my resume and feel free to contact me at the email below.
          </p>
        </p>
        <p className="emailText">Email</p>
        <p className="actualEmail">nesanyorku@gmail.com</p>
      </Jumbotron>
    );
  }
}
