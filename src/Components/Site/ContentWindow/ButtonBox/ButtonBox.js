import React, { Component } from "react";
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import ContactMe from "./ContactMe/ContactMe"

                
class ButtonBox extends Component {
    state = {
        aboutMeStatus: "hidden",
        portfolioStatus: "hidden",
        contactStatus: "hidden"
    };
    aboutMeClick = () => {
        console.log('About is clicked!!');
        if(this.state.aboutMeStatus === "visible"){
            this.setState({aboutMeStatus: "hidden"})
        }
        else {
            this.setState({aboutMeStatus: "visible"})
        }
      };
    portfolioClick = () => {
        console.log('port is clicked!!');
        if(this.state.portfolioStatus === "visible"){
            this.setState({portfolioStatus: "hidden"})
        }
        else {
            this.setState({portfolioStatus: "visible"})
        }
      };

    contactClick = () => {
        console.log('contact is clicked!!');
        if(this.state.contactStatus === "visible"){
            this.setState({contactStatus: "hidden"})
        }
        else {
            this.setState({contactStatus: "visible"})
        }
      };

    componentDidMount(){

    }

    render() {
        return (
            <div className="contentAndButtons">

                <span id="buttonBox">
                    <button onClick={this.aboutMeClick} className="customButton" id="aboutMeButton">About Me</button>
                    <button onClick={this.portfolioClick}className="customButton" id="portfolioButton">Portfolio</button>
                    <button onClick={this.contactClick}className="customButton" id="contactButton">Contact</button>
                </span> 
                <div className="contentBox">
                    <AboutMe data={this.state.aboutMeStatus}/>
                    <Portfolio data-visible={this.state.portfolioStatus}/>
                    <ContactMe data-visible={this.state.contactStatus}/>
                </div>
            </div>

        )
    }
};

export default ButtonBox;