import React, { Component } from 'react';
import AboutMe from "./Javascript/AboutMe"
import Portfolio from "./Javascript/Portfolio"
import ContactMe from "./Javascript/ContactMe"
import Stars from "./Javascript/Stars"
import "./css/style.css"
import "./css/stars.css"


class Site extends Component {
    state = {
        slideIndex: 1
    }

    render() {
      return (
          <div>
        <div className="App">
            <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
            <Stars/>
            <div id="contentWindow">  
                <span id="myName">Scott Allan</span><br />
                <span id="buttonBox">
                    <button className="customButton" id="aboutMeButton">About Me</button>
                    <button className="customButton" id="portfolioButton">Portfolio</button>
                    <button className="customButton" id="contactButton">Contact</button>
                </span> 
                    <AboutMe/>
                    <Portfolio/>
                    <ContactMe/>
            </div>
                </div>  
                <footer className="myFooter">
                Copyright Scott Allan 2018
                </footer>
            </div>  
      )
    }
  }
  
export default Site;
  