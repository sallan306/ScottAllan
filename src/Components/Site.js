import React, { Component } from 'react';
import Stars from "./Javascript/Stars"
import Footer from "./Javascript/Footer"
import LinksExtensions from "./Javascript/LinksExtensions"
import ContentWindow from "./Javascript/ContentWindow"
import "./css/style.css"



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
  