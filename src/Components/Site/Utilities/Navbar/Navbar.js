import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
    state = {
        navbarClass: "navbar",
        lastSelected: ""
    }




    render() {
      return (
        <div className={this.state.navbarClass}>
          <span className="navButtonsContainer">
            <span className="navButton navHomeButton" onClick={() => {this.props.goToPage("Home")}}>
              <div className="navName navNameHome">Home</div>
              <div id="underlineHome" className={this.props.selectedNav === "Home" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navAboutButton" onClick={() => {this.props.goToPage("About")}}>
              <div className="navName navNameAbout">About</div>
              <div id="underlineAbout" className={this.props.selectedNav === "About" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navServicesButton" onClick={() => {this.props.goToPage("Services")}}>
              <div className="navName navNameServices">Services</div>
              <div id="underlineServices"className={this.props.selectedNav === "Services" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navPortfolioButton" onClick={() => {this.props.goToPage("Portfolio")}}>
              <div className="navName navNamePortfolio">Portfolio</div>
              <div id="underlinePortfolio"className={this.props.selectedNav === "Portfolio" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>  
            <span className="navButton navContactButton" onClick={() => {this.props.goToPage("Contact")}}>
              <div className="navName navNameContact">Contact</div>
              <div id="underlineContact"className={this.props.selectedNav === "Contact" ? "navUnderline navSelected" : "navUnderline"}></div>
            </span>
            <span className="navButton navColorButton" onClick={this.props.changeColor}>
              <div className="navName navNameColor">Color</div>
              <div id="underlineColor"className="navUnderline"></div>
            </span>
          </span>
        </div>  
      )
    }
  }
  
export default Navbar;
  