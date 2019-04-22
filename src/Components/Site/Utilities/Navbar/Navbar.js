import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
    state = {
        navbarClass: "navbar",
        lastSelected: "",
        sideNavVisible: false
    }


    openSideNav = () => {
      this.setState({sideNavVisible: this.state.sideNavVisible ? false : true})
    }

    render() {
      return (
        <div className={this.state.navbarClass}>
          <button className="sideNavButton" onClick={()=> this.openSideNav()}>
            <div className="menuItem menuItem1"></div>
            <div className="menuItem menuItem2"></div>
            <div className="menuItem menuItem3"></div>
          </button>
          <span className="sideNav" style={{visibility: this.state.sideNavVisible ? "visible" : "hidden", height: this.state.sideNavVisible ? "40vh" : "5vh"}}>
            <span className="sideNavLinks">
            Resume<button>PDF</button><button>Word</button><button>Google Doc</button>
            </span>

          </span>
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
          </span>
        </div>  
      )
    }
  }
  
export default Navbar;
  