import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"
import MainWindow from "./MainWindow/MainWindow"
import "./Site.css"
import $ from "jquery"

import elephantPic from "./MainWindow/Images/elephant.jpg"   
import elephantBlur from "./MainWindow/Images/elephant_blur.jpg"   
import pugPic from "./MainWindow/Images/pug.jpg"   
import pugBlur from "./MainWindow/Images/pug_blur.jpg"   
import giraffePic from "./MainWindow/Images/giraffe.jpg"   
import giraffeBlur from "./MainWindow/Images/giraffe_blur.jpg"   


class Site extends Component {
  constructor(props) {
    super(props)
    this.homeRef = React.createRef()
    this.aboutRef = React.createRef()
    this.servicesRef = React.createRef()
    this.portfolioRef = React.createRef()
    this.contactRef = React.createRef()
  }
  state = {
      selectedNav: "home",
      scrollPercent: 0,
      backgroundColor: "rgb(105,105,105, 0.8)",
      navBackgroundColor: "transparent",
      navFontColor: "black",
      fontColor: "black",
      navbarVisible: false,
      sideNavVisible: false,
      backgroundPicture: giraffePic,
      backgroundBlur: giraffeBlur,
      scrollThrottle: 1,
      backgroundScrollSpeed: -8,
      width: 0,
      changingBackground: false
  }
  componentDidMount() {
    window.addEventListener('resize', () => this.updateWindowDimensions())
    this.updateWindowDimensions()
  }

  updateWindowDimensions = () => {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight }
      , () => {
        if (this.state.width > 1800) {
          this.setState({backgroundScrollSpeed: -8})
        }
        else if (this.state.width > 1200) {
          this.setState({backgroundScrollSpeed: -5})
        }
        else if (this.state.width > 800) {
          this.setState({backgroundScrollSpeed: -3})
        }
        else if (this.state.width > 550) {
          this.setState({backgroundScrollSpeed: -1})
        }
        else if (this.state.width > 350) {
          this.setState({backgroundScrollSpeed: -1})
        }
        else {
          this.setState({backgroundScrollSpeed: -1})
        }
      });
  }
  changeBackground = input => {
    this.setState({
      changingBackground: true
    }, () => {
      setTimeout( () => {
        this.setState({
          changingBackground: false
        })
      },1000)
    })
    if (input === "elephant") {
      this.setState({
        backgroundPicture: elephantPic, 
        backgroundBlur: elephantBlur,
        fontColor: "black", 
        navFontColor: "black"})
    }
    else if (input === "giraffe") {
      this.setState({
        backgroundPicture: giraffePic, 
        backgroundBlur: giraffeBlur,
        fontColor: "black", 
        navFontColor: "black"})
    }
    else if (input === "pug") {
      this.setState({
        backgroundPicture: pugPic, 
        backgroundBlur: pugBlur,
        fontColor: "white", 
        navFontColor: "white"})
    }
  }
  goToPage = value => {
    var multiplier = 0
    switch(value) {
      case "about": 
        multiplier = 1; break;
      case "services": 
        multiplier = 2; break;
      case "portfolio": 
        multiplier = 3; break;
      case "contact": 
        multiplier = 4; break;
      default:
        break;
    }
    if (this.state.sideNavVisible) {
      this.setState({sideNavVisible: false})
     setTimeout( () => {      
        $("#mainWindow").animate({scrollTop: window.innerHeight*multiplier - 30}, 'slow');
        this.getPercentage()
      }
      ,500)
    }
    else {
      $("#mainWindow").animate({scrollTop: window.innerHeight*multiplier - 30}, 'fast');
      this.getPercentage()
    }
  }
  getPercentage = () => {
    
      const scroller = document.getElementById('mainWindow');
      let height = scroller.clientHeight;
      let scrollHeight = scroller.scrollHeight - height;
      let scrollTop = scroller.scrollTop;
      let percent = Math.floor(scrollTop / scrollHeight * 100);
      this.setState({scrollPercent: percent})
      if(this.state.sideNavVisible === true) {
        this.setState({sideNavVisible: false})
      }
  
      if (this.state.scrollPercent > 80) {
        this.setState({selectedNav: "contact"})
      }
      else if (this.state.scrollPercent > 60) {
        this.setState({selectedNav: "portfolio"})
      }
      else if (this.state.scrollPercent > 40) {
        this.setState({selectedNav: "services"})
      }
      else if (this.state.scrollPercent > 20) {
        this.setState({selectedNav: "about"})
      }
      else if (this.state.scrollPercent > 0) {
        this.setState({selectedNav: "home"})
      }
  
      if (this.state.scrollPercent >= 22  ) {
        this.setState({
          navbarVisible: true
        })
        console.log(this.state.navbarVisible)
      }
      else {
        this.setState({navbarVisible: false})
      }

  }

  toggleSideNav = () => {
    this.setState({
      sideNavVisible: this.state.sideNavVisible ? false : true,

    }, () => {
      if (this.state.selectedNav === "home") {
        this.setState({
          navbarVisible: this.state.sideNavVisible === true ? true : false
        })
      }
    })

  }
  closeSideNav = () => {
    this.setState({
      sideNavVisible: false
    })
  }
    render() {
      return (
          <div id="site">
            {/* <div className="debugger">{this.state.changingBackground ? "true" : "false"}</div> */}
            <Navbar 
              sideNavVisible={this.state.sideNavVisible}
              navbarVisible={this.state.navbarVisible}
              goToPage={this.goToPage}
              selectedNav={this.state.selectedNav}
              changeColor={this.changeColor}
              navBackgroundColor={this.state.navBackgroundColor}
              fontColor={this.state.navFontColor}
              toggleSideNav={this.toggleSideNav}
              changeBackground={this.changeBackground}
              backgroundBlur={this.state.backgroundBlur}
              scrollPercent={this.state.scrollPercent}
              backgroundScrollSpeed={this.state.backgroundScrollSpeed}
            />
            <MainWindow 
              closeSideNav={this.closeSideNav}
              navbarVisible={this.state.navbarVisible}
              scrollPercent={this.state.scrollPercent}
              getPercentage={this.getPercentage}
              selectedNav={this.state.selectedNav}
              homeRef={this.homeRef}
              aboutRef={this.aboutRef}
              servicesRef={this.servicesRef}
              portfolioRef={this.portfolioRef}
              contactRef={this.contactRef}
              fontColor={this.state.fontColor}
              backgroundColor={this.state.backgroundColor}
              goToPage={this.goToPage}
              sideNavVisible={this.state.sideNavVisible}
              backgroundPicture={this.state.backgroundPicture}
              backgroundBlur={this.state.backgroundBlur}
              backgroundScrollSpeed={this.state.backgroundScrollSpeed}
              changingBackground={this.state.changingBackground}
            />
        </div>  
      )
    }
  }
  
export default Site;
  