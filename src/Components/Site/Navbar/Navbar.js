import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
    state = {

    }
    getFile = type => {
      if (type === "pdf") {
        // window.location.href = "./"
      }
      else if (type === "word") {

      }
      else if (type === "google") {

      }
    }

    render() {
      return (
        <div className="navbar" style={{background: this.props.navBackgroundColor, top: this.props.navbarVisible ? 0 : -100}}>
          <div className="backgroundPseudo backgroundSidenav" style={{
                  backgroundImage: "url("+this.props.backgroundPicture+")",
                  backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent),
                  backgroundAttachment: "fixed",
                  zIndex: -10,
                  top: this.props.sideNavVisible ? "0vh" : "-22.3vh",
                  left: 0,
                  height: "22.3vh",
                  width: "100vw",
                  transition: "1s",
                  borderStyle: "solid",
                  borderColor: "black",
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 1
          }}/>
          <button className="sideNavButton" onClick={()=> this.props.toggleSideNav()}>
            <div className={this.props.sideNavVisible ? "menuItem menuItem1 open1" : "menuItem menuItem1"} style={{background: this.props.fontColor}}></div>
            <div className={this.props.sideNavVisible ? "menuItem menuItem2 open2" : "menuItem menuItem2"} style={{background: this.props.fontColor}}></div>
            <div className={this.props.sideNavVisible ? "menuItem menuItem3 open3" : "menuItem menuItem3"} style={{background: this.props.fontColor}}></div>
          </button>
          <span 
            className="sideNav" 
            style={{
              visibility: this.props.sideNavVisible ? "visible" : "hidden", 
              height: this.props.sideNavVisible ? "40vh" : "6vh",
              background: this.props.navBackgroundColor
              }}
            >
            <span 
              className="sideNavLinks" 
              style={{
                visibility: this.props.sideNavVisible ? "visible" : "hidden", 
                opacity: this.props.sideNavVisible ? 1 : 0, 
                top: this.props.sideNavVisible ? "10vh" : "-5vh",
                color: this.props.fontColor
                }}
            >
              <div className="resumeContainer">
                Resume - 
                <button style={{color: "rgba(255, 255, 255, 0.7)"}} onClick={()=> this.getFile("pdf")} className="resumeButton">PDF</button> / 
                <button style={{color: "rgba(255, 255, 255, 0.7)"}} onClick={()=> this.getFile("word")} className="resumeButton">Word</button> / 
                <button style={{color: "rgba(255, 255, 255, 0.7)"}} onClick={()=> this.getFile("google")} className="resumeButton">Google Doc</button>
              </div>
              <div className="animalContainer">
                Change background - 
                <button onClick={()=> this.props.changeBackground("llama")} style={{color: "white"}} className="animalButton">Llama</button> / 
                <button onClick={()=> this.props.changeBackground("giraffe")} style={{color: "yellow"}} className="animalButton">Giraffe</button> / 
                <button onClick={()=> this.props.changeBackground("pug")} style={{color: "brown"}} className="animalButton">Pug</button>
                <button onClick={()=> this.props.changeBackground("elephant")} style={{color: "gray"}} className="animalButton">Elephant</button>
              </div>
            </span>

          </span>
          <span className="navButtonsContainer">
            <span className="navButton navHomeButton" onClick={() => {this.props.goToPage("home")}}>
              <div style={{color: this.props.fontColor}} className="navName navNameHome">Home</div>
              <div id="underlineHome" style={{background: this.props.fontColor}} className={this.props.selectedNav === "home" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navAboutButton" onClick={() => {this.props.goToPage("about")}}>
              <div style={{color: this.props.fontColor}} className="navName navNameAbout">About</div>
              <div id="underlineAbout" style={{background: this.props.fontColor}} className={this.props.selectedNav === "about" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navServicesButton" onClick={() => {this.props.goToPage("services")}}>
              <div style={{color: this.props.fontColor}} className="navName navNameServices">Services</div>
              <div id="underlineServices" style={{background: this.props.fontColor}} className={this.props.selectedNav === "services" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navPortfolioButton" onClick={() => {this.props.goToPage("portfolio")}}>
              <div style={{color: this.props.fontColor}} className="navName navNamePortfolio">Portfolio</div>
              <div id="underlinePortfolio"style={{background: this.props.fontColor}} className={this.props.selectedNav === "portfolio" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>  
            <span className="navButton navContactButton" onClick={() => {this.props.goToPage("contact")}}>
              <div style={{color: this.props.fontColor}} className="navName navNameContact">Contact</div>
              <div id="underlineContact"style={{background: this.props.fontColor}} className={this.props.selectedNav === "contact" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
          </span>
        </div>  
      )
    }
  }
  
export default Navbar;
  