import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import MainWindow from "./MainWindow/MainWindow";
import "./Site.css";
import $ from "jquery";

import elephantPic from "./MainWindow/Images/elephant.jpg";
import elephantBlur from "./MainWindow/Images/elephant_blur.jpg";
import pugPic from "./MainWindow/Images/pug.jpg";
import pugBlur from "./MainWindow/Images/pug_blur.jpg";
import catPic from "./MainWindow/Images/cat.jpg";
import catBlur from "./MainWindow/Images/cat_blur.jpg";
var pugPMColor = "white",
  pug2NDColor = "#a31010",
  pugIMGOffset = 50,
  catPMColor = "white",
  cat2NDColor = "#91611f",
  catIMGOffset = 130,
  elephantPMColor = "white",
  elephant2NDColor = "rgb(121, 89, 64)",
  elephantIMGOffset = 80


class Site extends Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.servicesRef = React.createRef();
    this.portfolioRef = React.createRef();
    this.contactRef = React.createRef();
  }
  state = {
    selectedNav: "home",
    scrollPercent: 0,
    backgroundColor: "rgb(105,105,105, 0.8)",
    navBackgroundColor: "transparent",
    primaryColor: catPMColor,
    secondaryColor: cat2NDColor,
    navbarVisible: false,
    sideNavVisible: false,
    backgroundPicture: catPic,
    backgroundBlur: catBlur,
    scrollThrottle: 1,
    backgroundScrollSpeed: -8,
    width: 0,
    height: 0,
    changingBackground: false,
    selectedAnimal: "cat",
    animalOffset: 130
  };
  componentDidMount() {
    window.addEventListener("resize", () => this.updateWindowDimensions());
    this.updateWindowDimensions();
  }

  updateWindowDimensions = () => {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => {
        if (this.state.width > 1800) {
          this.setState({ backgroundScrollSpeed: -8 });
        } else if (this.state.width > 1200) {
          this.setState({ backgroundScrollSpeed: -5 });
        } else if (this.state.width > 800) {
          this.setState({ backgroundScrollSpeed: -3 });
        } else if (this.state.width > 550) {
          this.setState({ backgroundScrollSpeed: -2 });
        } else if (this.state.width > 450) {
          this.setState({ backgroundScrollSpeed: -0.5 });
        } else {
          this.setState({ backgroundScrollSpeed: -0.5 });
        }
      }
    );
  };
  changeBackground = input => {
    this.setState(
      {
        changingBackground: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            changingBackground: false
          });
        }, 1000);
      }
    );
    if (input === "elephant") {
      this.setState({
        selectedAnimal: "elephant",
        backgroundPicture: elephantPic,
        backgroundBlur: elephantBlur,
        primaryColor: elephantPMColor,
        secondaryColor: elephant2NDColor,
        animalOffset: elephantIMGOffset
      });
    } else if (input === "cat") {
      this.setState({
        selectedAnimal: "cat",
        backgroundPicture: catPic,
        backgroundBlur: catBlur,
        primaryColor: catPMColor,
        secondaryColor: cat2NDColor,
        animalOffset: catIMGOffset
      });
    } else if (input === "pug") {
      this.setState({
        selectedAnimal: "pug",
        backgroundPicture: pugPic,
        backgroundBlur: pugBlur,
        primaryColor: pugPMColor,
        secondaryColor: pug2NDColor,
        animalOffset: pugIMGOffset
      });
    }
  };
  goToPage = value => {
    var multiplier = 0;
    switch (value) {
      case "about":
        multiplier = 1.01;
        break;
      case "services":
        multiplier = 1.94;
        break;
      case "portfolio":
        multiplier = 2.865;
        break;
      case "contact":
        multiplier = 4;
        break;
      default:
        break;
    }
    if (this.state.sideNavVisible) {
      this.setState({ sideNavVisible: false });
      setTimeout(() => {
        $("#mainWindow").animate(
          { scrollTop: window.innerHeight * multiplier - 30 },
          "fast"
        );
        this.getPercentage();
      }, 100);
    } else {
      $("#mainWindow").animate(
        { scrollTop: window.innerHeight * multiplier - 0 },
        "fast"
      );
      this.getPercentage();
    }
  };
  getPercentage = () => {
    const scroller = document.getElementById("mainWindow");
    let height = scroller.clientHeight;
    let scrollHeight = scroller.scrollHeight - height;
    let scrollTop = scroller.scrollTop;
    let percent = Math.floor((scrollTop / scrollHeight) * 100);
    this.setState({ scrollPercent: percent });
    if (this.state.sideNavVisible === true) {
      this.setState({ sideNavVisible: false });
    }

    if (this.state.scrollPercent > 80) {
      this.setState({ selectedNav: "contact" });
    } else if (this.state.scrollPercent > 60) {
      this.setState({ selectedNav: "portfolio" });
    } else if (this.state.scrollPercent > 40) {
      this.setState({ selectedNav: "services" });
    } else if (this.state.scrollPercent > 20) {
      this.setState({ selectedNav: "about" });
    } else if (this.state.scrollPercent > 0) {
      this.setState({ selectedNav: "home" });
    }

    if (this.state.scrollPercent >= 22) {
      this.setState({
        navbarVisible: true
      });
      console.log(this.state.navbarVisible);
    } else {
      this.setState({ navbarVisible: false });
    }
  };

  toggleSideNav = () => {
    this.setState(
      {
        sideNavVisible: this.state.sideNavVisible ? false : true
      },
      () => {
        if (this.state.selectedNav === "home") {
          this.setState({
            navbarVisible: this.state.sideNavVisible === true ? true : false
          });
        }
      }
    );
  };
  closeSideNav = () => {
    this.setState({
      sideNavVisible: false
    });
  };
  render() {
    return (
      <div id="site">
        {/* <div className="debugger">{window.innerHeight}</div> */}
        <Navbar
          {...this.state}
          goToPage={this.goToPage}
          changeColor={this.changeColor}
          toggleSideNav={this.toggleSideNav}
          changeBackground={this.changeBackground}
        />
        <MainWindow
          {...this.state}
          closeSideNav={this.closeSideNav}
          getPercentage={this.getPercentage}
          homeRef={this.homeRef}
          aboutRef={this.aboutRef}
          servicesRef={this.servicesRef}
          portfolioRef={this.portfolioRef}
          contactRef={this.contactRef}
          goToPage={this.goToPage}
        />
      </div>
    );
  }
}

export default Site;
