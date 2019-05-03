import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
    state = {
        sideNavVisible: false,
        navButton1Name: "menuItem menuItem1",
        navButton2Name: "menuItem menuItem2",
        navButton3Name: "menuItem menuItem3",
    }


    openSideNav = () => {
      this.setState({

        sideNavVisible: this.state.sideNavVisible ? false : true,
        navButton1Name: this.state.navButton1Name === "menuItem menuItem1" ? "menuItem menuItem1 open1" : "menuItem menuItem1",
        navButton2Name: this.state.navButton2Name === "menuItem menuItem2" ? "menuItem menuItem2 open2" : "menuItem menuItem2",
        navButton3Name: this.state.navButton3Name === "menuItem menuItem3" ? "menuItem menuItem3 open3" : "menuItem menuItem3"
      
      })

    }
    closeSideNav = () => {
      this.setState({
        sideNavVisible: false,
        navButton1Name: "menuItem menuItem1",
        navButton2Name: "menuItem menuItem2",
        navButton3Name: "menuItem menuItem3"
      })
    }

    render() {
      return (
        <div className="navbar" style={{background: this.props.navBackgroundColor, top: this.props.navbarVisible ? 0 : -100}}>
          <button className="sideNavButton" onClick={()=> this.openSideNav()}>
            <div className={this.state.navButton1Name} style={{background: this.props.fontColor}}></div>
            <div className={this.state.navButton2Name} style={{background: this.props.fontColor}}></div>
            <div className={this.state.navButton3Name} style={{background: this.props.fontColor}}></div>
          </button>
          <span 
            className="sideNav" 
            style={{
              visibility: this.state.sideNavVisible ? "visible" : "hidden", 
              height: this.state.sideNavVisible ? "40vh" : "6vh",
              background: this.props.navBackgroundColor
              }}
            >
            <span 
              className="sideNavLinks" 
              style={{
                visibility: this.state.sideNavVisible ? "visible" : "hidden", 
                opacity: this.state.sideNavVisible ? 1 : 0, 
                top: this.state.sideNavVisible ? 100 : 25,
                color: this.props.fontColor
                }}
            >
              Resume - 
              <button style={{color: this.props.fontColor}} className="resumeButton">PDF</button> / 
              <button style={{color: this.props.fontColor}} className="resumeButton">Word</button> / 
              <button style={{color: this.props.fontColor}} className="resumeButton">Google Doc</button>
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
  