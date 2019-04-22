import React, { Component } from 'react';
import Navbar from "./Utilities/Navbar/Navbar"
import MainWindow from "./MainWindow/MainWindow"
import "./Site.css"


class Site extends Component {
  state = {
      selectedNav: "home",
      scrollPercent: 0,
  }
  goToPage = value => {

    if (value === "home") {
      document.getElementById("homeRef").scrollIntoView()
    }
    else if (value === "about") {
      document.getElementById("aboutRef").scrollIntoView()
    }
    else if (value === "services") {
      document.getElementById("servicesRef").scrollIntoView()
    }
    else if (value === "portfolio") {
      document.getElementById("portfolioRef").scrollIntoView()
    }
    else if (value === "contact") {
      document.getElementById("contactRef").scrollIntoView()
    }

  }
  getPercentage = () => {
    const scroller = document.getElementById('mainWindow');
    let height = scroller.clientHeight;
    let scrollHeight = scroller.scrollHeight - height;
    let scrollTop = scroller.scrollTop;
    let percent = Math.floor(scrollTop / scrollHeight * 100);
    this.setState({scrollPercent: percent})


    if (this.state.scrollPercent > 75) {
      this.setState({selectedNav: "contact"})
    }
    else if (this.state.scrollPercent > 55) {
      this.setState({selectedNav: "portfolio"})
    }
    else if (this.state.scrollPercent > 35) {
      this.setState({selectedNav: "services"})
    }
    else if (this.state.scrollPercent > 15) {
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
              changeColor={this.changeColor}/>
            <MainWindow scrollPercent={this.state.scrollPercent}
                        getPercentage={this.getPercentage}
                        selectedNav={this.state.selectedNav}/>
        </div>  
      )
    }
  }
  
export default Site;
  