import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"
import MainWindow from "./MainWindow/MainWindow"
import "./Site.css"

import elephantPic from "./MainWindow/Images/elephant.jpg"   
import llamaPic from "./MainWindow/Images/llama.jpg"   
import pugPic from "./MainWindow/Images/pug.jpg"   
import giraffePic from "./MainWindow/Images/giraffe.jpg"   


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
      navFontColor: "white",
      fontColor: "white",
      navbarVisible: false,
      sideNavVisible: false,
      backgroundPicture: elephantPic,
      scrollThrottle: 1
  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
  handleScroll = () => {
    this.setState({sideNavVisible: false})
    console.log("hello")
  }
  changeBackground = input => {
    if (input === "elephant") {
      this.setState({backgroundPicture: elephantPic, fontColor: "white", navFontColor: "white"})
    }
    else if (input === "giraffe") {
      this.setState({backgroundPicture: giraffePic, fontColor: "white", navFontColor: "black"})
    }
    else if (input === "pug") {
      this.setState({backgroundPicture: pugPic, fontColor: "white", navFontColor: "white"})
    }
    else if (input === "llama") {
      this.setState({backgroundPicture: llamaPic, fontColor: "black", navFontColor: "black"})
    }
  }
  goToPage = value => {

    if (value === "home") {
      if (this.state.sideNavVisible) {
        this.setState({sideNavVisible: false})
        setTimeout( () => {
          this.homeRef.current.scrollIntoView()
        }
        ,500)
      }
      else {
        this.homeRef.current.scrollIntoView()
      }
    }
    else if (value === "about") {
      // this.aboutRef.current.scrollIntoView()
      if (this.state.sideNavVisible) {
        this.setState({sideNavVisible: false})
        setTimeout( () => {
          this.aboutRef.current.scrollIntoView()
        }
        ,500)
      }
      else {
        this.aboutRef.current.scrollIntoView()
      }


    }
    else if (value === "services") {

      if (this.state.sideNavVisible) {
        this.setState({sideNavVisible: false})
        setTimeout( () => {
          this.servicesRef.current.scrollIntoView()
        }
        ,500)
      }
      else {
        this.servicesRef.current.scrollIntoView()
      }

    }
    else if (value === "portfolio") {
      
      if (this.state.sideNavVisible) {
        this.setState({sideNavVisible: false})
        setTimeout( () => {
          this.portfolioRef.current.scrollIntoView()
        }
        ,500)
      }
      else {
        this.portfolioRef.current.scrollIntoView()
      }

    }
    else if (value === "contact") {
      if (this.state.sideNavVisible) {
        this.setState({sideNavVisible: false})
        setTimeout( () => {
          this.contactRef.current.scrollIntoView()
        }
        ,500)
      }
      else {
        this.contactRef.current.scrollIntoView()
      }

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
      sideNavVisible: this.state.sideNavVisible ? false : true
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
            {/* <div className="debugger">{this.state.navbarVisible? "visible: true":"visible: false"}</div> */}
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
              backgroundPicture={this.state.backgroundPicture}
              scrollPercent={this.state.scrollPercent}
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
            />
        </div>  
      )
    }
  }
  
export default Site;
  