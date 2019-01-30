import React, { Component } from 'react';
import Stars from "./Utilities/Stars/Stars"
import Footer from "./Utilities/Footer/Footer"
import MainWindow from "./MainWindow/MainWindow"
import "./Site.css"



class Site extends Component {
    state = {
        slideIndex: 1
    }

    render() {
      return (
          <div id="site">
            <Stars/>
            <MainWindow/>
            <Footer/> 
        </div>  
      )
    }
  }
  
export default Site;
  