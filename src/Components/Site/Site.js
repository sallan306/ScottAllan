import React, { Component } from 'react';
import Navbar from "./Utilities/Navbar/Navbar"
import MainWindow from "./MainWindow/MainWindow"
import "./Site.css"



class Site extends Component {
  state = {
      slideIndex: 1,
      selectedNav: "Home",
      scrollPercent: 0
  }
  goToPage = value => {
    document.getElementById(value.toLowerCase()+"Title").scrollIntoView({behavior: "smooth"})

  }
  getPercentage = () => {
    const scroller = document.getElementById('mainWindow');
    let height = scroller.clientHeight;
    let scrollHeight = scroller.scrollHeight - height;
    let scrollTop = scroller.scrollTop;
    let percent = Math.floor(scrollTop / scrollHeight * 100);
    this.setState({scrollPercent: percent})


    if (this.state.scrollPercent > 94) {
      this.setState({selectedNav: "Contact"})
    }
    else if (this.state.scrollPercent > 70) {
      this.setState({selectedNav: "Portfolio"})
    }
    else if (this.state.scrollPercent > 46) {
      this.setState({selectedNav: "Services"})
    }
    else if (this.state.scrollPercent > 22) {
      this.setState({selectedNav: "About"})
    }
    else if (this.state.scrollPercent > 0) {
      this.setState({selectedNav: "Home"})
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
                        scrollPastSection={this.scrollPastSection}/>
        </div>  
      )
    }
  }
  
export default Site;
  