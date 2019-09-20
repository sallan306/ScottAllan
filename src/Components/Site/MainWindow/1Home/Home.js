import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    IamA: [
      "A Web Designer",
      "A Software Engineer",
      "A UI/UX Enthusiast",
      "A SEO Optimizer",
      "A Dinosaur",
      "100 Percent Geek"
    ],
    selected: "A Web Designer",
    jobRandomColor: ["#7474d4", "#e33033", "#f09648", "#73ebe7"],
    jobText: "",
    oldWord: "A Web Designer",
    jobColor: "#000080",
    oldColor: "black",
    hueRotate: 0
  };

  addLetters = () => {
    this.setState({ cursorStatus: "active" });
    var addLettersInterval = setInterval(() => {
      if (this.state.selected.length > 0) {
        this.setState({
          jobText: this.state.jobText + this.state.selected[0],
          selected: this.state.selected.slice(1)
        });
      } else {
        this.setState({
          oldWord: this.state.jobText,
          oldColor: this.state.jobColor
        });
        this.blinkingCursorBefore();
        clearInterval(addLettersInterval);
      }
    }, 75);
  };
  eraseLetters = () => {
    this.setState({ cursorStatus: "active" });
    var eraseLettersInterval = setInterval(() => {
      if (this.state.jobText.length > 0) {
        this.setState({
          jobText: this.state.jobText.slice(0, this.state.jobText.lastIndexOf())
        });
      } else {
        this.blinkingCursorAfter();
        clearInterval(eraseLettersInterval);
      }
    }, 25);
  };
  blinkingCursorBefore = () => {
    this.setState({ cursorStatus: "inactiveCursor" });
    setTimeout(() => this.eraseLetters(), 1000);
  };
  blinkingCursorAfter = () => {
    this.setState({ cursorStatus: "inactiveCursor" });
    setTimeout(() => this.newWord(), 1000);
  };
  newWord = () => {
    this.setState({
      selected: this.state.IamA[
        Math.floor(Math.random() * this.state.IamA.length)
      ],
      jobColor: this.state.jobRandomColor[
        Math.floor(Math.random() * this.state.jobRandomColor.length)
      ]
    });
    if (
      this.state.selected === this.state.oldWord ||
      this.state.oldColor === this.state.jobColor
    ) {
      this.newWord();
    } else this.addLetters();
  };

  componentDidMount() {
    this.addLetters();
    setInterval(() => {
      this.setState({ hueRotate: this.state.hueRotate + 0.1 });
    }, 2000);
  }
  jobDescription = displayType => {
    if (displayType === "desktop") {
      return (
        <span className="jobDescriptionContainer">
          <span id="myJob" style={{ color: this.state.jobColor }}>
            {" " + this.state.jobText}
          </span>
          <span className={this.state.cursorStatus}>|</span>
        </span>
      );
    } else if (displayType === "mobile") {
      return (
        <div className="jobDescriptionContainer">
          <span id="myJob" style={{ color: this.state.jobColor }}>
            {" " + this.state.jobText}
          </span>
          <span className={this.state.cursorStatus}>|</span>
        </div>
      );
    }
  };
  render() {
    return (
      <div ref={this.props.homeRef} id="home">
        {/* <div className="debugger">{this.props.navbarVisible ? "true" : "false"}</div> */}
        <img
          id="homePic"
          src={this.props.backgroundPicture}
          alt="Scott Allan"
          style={{
            top:
              this.props.backgroundScrollSpeed *
              (this.props.animalOffset + this.props.scrollPercent)
          }}
        />
        <span
          id="myName"
          className="myName"
          style={{ color: this.props.primaryColor }}
        >
          Hello, I'm Scott.
          {this.props.width > 670
            ? this.jobDescription("desktop")
            : this.jobDescription("mobile")}
        </span>
        <span
          className="homeArrowContainer"
          style={{
            visibility: this.props.navbarVisible ? "hidden" : "visible"
          }}
          onClick={() => this.props.goToPage("about")}
        >
          <i
            className="homeArrow down"
            style={{ borderColor: this.props.primaryColor }}
          ></i>
          <i
            className="homeArrow2 down"
            style={{ borderColor: this.props.primaryColor }}
          ></i>
        </span>

        {/* {console.log(this.props.homeRef.current)} */}
      </div>
    );
  }
}

export default Home;
