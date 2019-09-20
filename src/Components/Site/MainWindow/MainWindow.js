import React, { Component } from "react";
import "./MainWindow.css";
import Home from "./1Home/Home";
import About from "./2About/About";
import Services from "./3Services/Services";
import Portfolio from "./4Portfolio/Portfolio";
import Contact from "./5Contact/Contact";

class MainWindow extends Component {
  state = {};
  render() {
    return (
      <div
        id="mainWindow"
        className="mainWindow"
        onScroll={() => this.props.getPercentage()}
      >
        <Home {...this.props} />
        <About {...this.props} />
        <Services {...this.props} />
        <Portfolio {...this.props} />
        <Contact {...this.props} />
      </div>
    );
  }
}

export default MainWindow;
