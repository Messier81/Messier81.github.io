import React, { Component } from "react";
import "./Front.css";

//Comps
import AboutMe from "./AboutMe";
import Navi from "./Navi";
import MainView from "./MainView";
import Projects from "./Projects";

export default class Front extends Component {
  render() {
    return (
      <div className="frontMain">
        <Navi />
        <MainView />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}
