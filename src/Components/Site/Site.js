import React, { Component } from 'react';
import Stars from "./Utilities/Stars/Stars"
import Footer from "./Utilities/Footer"
import LinksExtensions from "./Utilities/LinksExtensions"
import ContentWindow from "./ContentWindow/ContentWindow"
import "./style.css"



class Site extends Component {
    state = {
        slideIndex: 1
    }

    render() {
      return (
          <div>
            <Stars/>
            <LinksExtensions/>
            <ContentWindow/>
            <Footer/> 
        </div>  
      )
    }
  }
  
export default Site;
  