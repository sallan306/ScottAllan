import React, { Component } from 'react';
import Navbar from "./Utilities/Navbar/Navbar"
import MainWindow from "./MainWindow/MainWindow"
import "./Site.css"


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
      backgroundColor: "rgb(23,62,67, .8)",
      navBackgroundColor: "gray",
      fontColor: "black"
  }
  goToPage = value => {

    if (value === "home") {
      console.log(this.homeRef.current)
      this.homeRef.current.scrollIntoView()
    }
    else if (value === "about") {
      console.log(this.aboutRef.current)
      this.aboutRef.current.scrollIntoView()
    }
    else if (value === "services") {
      this.servicesRef.current.scrollIntoView()
    }
    else if (value === "portfolio") {
      this.portfolioRef.current.scrollIntoView()
    }
    else if (value === "contact") {
      this.contactRef.current.scrollIntoView()
    }

  }
  getPercentage = () => {
    const scroller = document.getElementById('mainWindow');
    let height = scroller.clientHeight;
    let scrollHeight = scroller.scrollHeight - height;
    let scrollTop = scroller.scrollTop;
    let percent = Math.floor(scrollTop / scrollHeight * 100);
    this.setState({scrollPercent: percent})


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
  }

    render() {
      return (
          <div id="site">
            <Navbar 
              goToPage={this.goToPage}
              selectedNav={this.state.selectedNav}
              changeColor={this.changeColor}
              navBackgroundColor={this.state.navBackgroundColor}
              fontColor={this.state.fontColor}
            />
            <MainWindow 
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
            />
        </div>  
      )
    }
  }
  
export default Site;
  