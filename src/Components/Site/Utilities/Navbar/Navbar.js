import React, { Component } from 'react';
import "./Navbar.css"

class Site extends Component {
    state = {
        navbarClass: "navbar",
        lastSelected: ""
    }


  goToPage = value => {

  this.state.lastSelected !== "" ? document.getElementById("underline"+this.state.lastSelected).classList.toggle("navSelected") : this.setState({})
  document.getElementById("underline"+value).classList.toggle("navSelected");

  this.setState({
    lastSelected: value
  })
  document.getElementById(value.toLowerCase()+"Title").scrollIntoView({behavior: "smooth"})

}
    render() {
      return (
        <div className={this.state.navbarClass}>
          <span className="navButtonsContainer">
            <span className="navButton navHomeButton" onClick={() => {this.goToPage("Home")}}>
              <div className="navName navNameHome">Home</div>
              <div id="underlineHome" className="navUnderline"></div>
            </span>
            <span className="navButton navAboutButton" onClick={() => {this.goToPage("About")}}>
              <div className="navName navNameAbout">About</div>
              <div id="underlineAbout" className="navUnderline"></div>
            </span>
            <span className="navButton navServicesButton" onClick={() => {this.goToPage("Services")}}>
              <div className="navName navNameServices">Services</div>
              <div id="underlineServices"className="navUnderline"></div>
            </span>
            <span className="navButton navPortfolioButton" onClick={() => {this.goToPage("Portfolio")}}>
              <div className="navName navNamePortfolio">Portfolio</div>
              <div id="underlinePortfolio"className="navUnderline"></div>
            </span>  
            <span className="navButton navContactButton" onClick={() => {this.goToPage("Contact")}}>
              <div className="navName navNameContact">Contact</div>
              <div id="underlineContact"className="navUnderline"></div>
            </span>
          </span>
        </div>  
      )
    }
  }
  
export default Site;
  