import React, { Component } from "react";
import "./Navbar.css";
import Resume from "../MainWindow/Files/Resume.pdf";
import Pug from "./SVG/Pug";
import Elephant from "./SVG/Elephant";
import Cat from "./SVG/Cat";
const googleLink =
  "https://docs.google.com/document/d/15yJT9t423c4WiMPlCgdmDld2Lw-szrcb59tT_2JN7Zg/edit?usp=sharing";

class Navbar extends Component {
  state = {
    opacity: 1
  };
  getFile = type => {
    if (type === "pdf") {
      window.location.href = Resume;
    } else if (type === "google") {
      window.location.href = googleLink;
    }
  };

  render() {
    return (
      <div
        className="navbar"
        style={{
          background: this.props.navBackgroundColor,
          top: this.props.navbarVisible ? "0vh" : -40
        }}
      >
        {/* <div className="backgroundPseudo backgroundSidenav" style={{
                  backgroundImage: "url("+this.props.backgroundBlur+")",
                  backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent),
                  height: this.props.sideNavVisible ? "7.5vh" : "0vh",
                  transition: "0.5s"
          }}/> */}
        <button
          className="sideNavButton"
          onClick={() => this.props.toggleSideNav()}
        >
          <div
            className={
              this.props.sideNavVisible
                ? "menuItem menuItem1 open1"
                : "menuItem menuItem1"
            }
            style={{
              opacity: this.state.opacity,
              background: this.props.primaryColor
            }}
          ></div>
          <div
            className={
              this.props.sideNavVisible
                ? "menuItem menuItem2 open2"
                : "menuItem menuItem2"
            }
            style={{ background: this.props.primaryColor }}
          ></div>
          <div
            className={
              this.props.sideNavVisible
                ? "menuItem menuItem3 open3"
                : "menuItem menuItem3"
            }
            style={{ background: this.props.primaryColor }}
          ></div>
        </button>
        <span
          className="sideNav"
          style={{
            visibility: this.props.sideNavVisible ? "visible" : "visible",
            height: this.props.sideNavVisible ? 40 : 0,
            top: 0,
            background: this.props.navBackgroundColor,
            borderColor: this.props.primaryColor
          }}
        >
          <span
            className="sideNavLinks"
            style={{
              visibility: this.props.sideNavVisible ? "visible" : "hidden",
              opacity: this.props.sideNavVisible ? 1 : 0,
              top: this.props.sideNavVisible ? -5 : -20,
              color: this.props.primaryColor
            }}
          >
            {/* <div className="resumeContainer">
                Resume - 
                <button style={{transition: "1s",color: this.props.primaryColor}} onClick={()=> this.getFile("pdf")} className="resumeButton">PDF</button> / 
                <button style={{transition: "1s",color: this.props.primaryColor}} onClick={()=> this.getFile("google")} className="resumeButton">Google Doc</button>
              </div> */}
            <div className="animalContainer">
              <button
                onClick={() => this.props.changeBackground("cat")}
                style={{ color: "yellow" }}
                className={
                  this.props.selectedAnimal === "giraffe"
                    ? "animalButton animalSelected"
                    : "animalButton"
                }
              >
                <Cat fillColor={this.props.primaryColor} />
              </button>
              <button
                onClick={() => this.props.changeBackground("pug")}
                style={{ color: "brown" }}
                className={
                  this.props.selectedAnimal === "pug"
                    ? "animalButton animalSelected"
                    : "animalButton"
                }
              >
                <Pug />
              </button>
              <button
                onClick={() => this.props.changeBackground("elephant")}
                style={{ color: "gray" }}
                className={
                  this.props.selectedAnimal === "elephant"
                    ? "animalButton animalSelected"
                    : "animalButton"
                }
              >
                <Elephant fillColor={this.props.primaryColor} />
              </button>
            </div>
          </span>
        </span>
        <span
          className="navButtonsContainer"
          style={{ borderBottomColor: this.props.primaryColor }}
        >
          <span
            className="navButton navContactButton"
            onClick={() => {
              this.props.goToPage("contact");
            }}
            style={{
              width:
                this.props.sideNavVisible && this.props.width < 420
                  ? 25
                  : 40,
                  opacity: this.props.sideNavVisible && this.props.width < 420 ? 0 : 1
            }}
          >
            <div
              style={{ color: this.props.primaryColor }}
              className="navName navNameContact"
            >
              Contact
            </div>
            <div
              id="underlineContact"
              style={{ background: this.props.primaryColor }}
              className={
                this.props.selectedNav === "contact"
                  ? "navUnderline navSelected"
                  : "navUnderline"
              }
            ></div>
          </span>
          <span
            className="navButton navPortfolioButton"
            style={{
              width:
                this.props.sideNavVisible && this.props.width < 420
                  ? 25
                  : 40,
                  opacity: this.props.sideNavVisible && this.props.width < 420 ? 0 : 1
            }}
            onClick={() => {
              this.props.goToPage("portfolio");
            }}
          >
            <div
              style={{ color: this.props.primaryColor }}
              className="navName navNamePortfolio"
            >
              Portfolio
            </div>
            <div
              id="underlinePortfolio"
              style={{ background: this.props.primaryColor }}
              className={
                this.props.selectedNav === "portfolio"
                  ? "navUnderline navSelected"
                  : "navUnderline"
              }
            ></div>
          </span>
          <span
            className="navButton navServicesButton"
            style={{
              width:
                this.props.sideNavVisible && this.props.width < 420
                  ? 25
                  : 40,
                  opacity: this.props.sideNavVisible && this.props.width < 420 ? 0 : 1
            }}
            onClick={() => {
              this.props.goToPage("services");
            }}
          >
            <div
              style={{ color: this.props.primaryColor }}
              className="navName navNameServices"
            >
              Services
            </div>
            <div
              id="underlineServices"
              style={{ background: this.props.primaryColor }}
              className={
                this.props.selectedNav === "services"
                  ? "navUnderline navSelected"
                  : "navUnderline"
              }
            ></div>
          </span>
          <span
            className="navButton navAboutButton"
            style={{
              width:
                this.props.sideNavVisible && this.props.width < 420
                  ? 25
                  : 40,
                  opacity: this.props.sideNavVisible && this.props.width < 420 ? 0 : 1
            }}
            onClick={() => {
              this.props.goToPage("about");
            }}
          >
            <div
              style={{ color: this.props.primaryColor }}
              className="navName navNameAbout"
            >
              About
            </div>
            <div
              id="underlineAbout"
              style={{ background: this.props.primaryColor }}
              className={
                this.props.selectedNav === "about"
                  ? "navUnderline navSelected"
                  : "navUnderline"
              }
            ></div>
          </span>
          <span
            className="navButton navHomeButton"
            style={{
              width:
                this.props.sideNavVisible && this.props.width < 420
                  ? 25
                  : 40,
                  opacity: this.props.sideNavVisible && this.props.width < 420 ? 0 : 1
            }}
            onClick={() => {
              this.props.goToPage("home");
            }}
          >
            <div
              style={{ color: this.props.primaryColor }}
              className="navName navNameHome"
            >
              Home
            </div>
            <div
              id="underlineHome"
              style={{ background: this.props.primaryColor }}
              className={
                this.props.selectedNav === "home"
                  ? "navUnderline navSelected"
                  : "navUnderline"
              }
            ></div>
          </span>
        </span>
      </div>
    );
  }
}

export default Navbar;
