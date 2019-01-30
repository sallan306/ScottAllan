import React, { Component } from "react";
import AboutMe from "./AboutMe/AboutMe.js"
import Portfolio from "./Portfolio/Portfolio.js"
import ContactMe from "./ContactMe/ContactMe.js"

                
class ButtonBox extends Component {
    state = {
        aboutMeStatus: "none",
        portfolioStatus: "none",
        contactStatus: "none"
    };
    aboutMeClick = () => {
        console.log('About is clicked!!');
        if(this.state.aboutMeStatus === "initial"){
            this.setState({aboutMeStatus: "none"})
        }
        else {
            this.setState({aboutMeStatus: "initial"})
        }
      };
    portfolioClick = () => {
        console.log('port is clicked!!');
        if(this.state.portfolioStatus === "initial"){
            this.setState({portfolioStatus: "none"})
        }
        else {
            this.setState({portfolioStatus: "initial"})
        }
      };

    contactClick = () => {
        console.log('contact is clicked!!');
        if(this.state.contactStatus === "initial"){
            this.setState({contactStatus: "none"})
        }
        else {
            this.setState({contactStatus: "initial"})
        }
      };

    componentDidMount(){

    }

    render() {
        return (
            <div className="contentAndButtons">

                <span id="buttonBox">
                    <button onClick={this.aboutMeClick}     className="customButton" id="aboutMeButton">About</button>
                    <button onClick={this.portfolioClick}   className="customButton" id="portfolioButton">Portfolio</button>
                    <button onClick={this.contactClick}     className="customButton" id="contactButton">Contact</button>
                </span> 
                <div className="contentBox">
                    <AboutMe    display={this.state.aboutMeStatus}/>
                    <Portfolio  display={this.state.portfolioStatus}/>
                    <ContactMe  display={this.state.contactStatus}/>
                </div>
            </div>

        )
    }
};

export default ButtonBox;