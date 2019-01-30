import React, { Component } from 'react';
import Stars from "./Utilities/Stars/Stars"
import Footer from "./Utilities/Footer"
import ContentWindow from "./ContentWindow/ContentWindow"
import "./style.css"
import "./Utilities/Stars/stars.css"



class Site extends Component {
    state = {
        slideIndex: 1
    }

    render() {
      return (
          <div id="site">
            <Stars/>
            <ContentWindow/>
            <Footer/> 
        </div>  
      )
    }
  }
  
export default Site;
  