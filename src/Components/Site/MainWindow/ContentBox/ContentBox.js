import React, { Component } from "react";
import AboutMe from "./AboutMe/AboutMe.js"
import Portfolio from "./Portfolio/Portfolio.js"
import ContactMe from "./ContactMe/ContactMe.js"




class ContentBox extends Component {

    render() {
        return (
            <div className="contentBox">
                <AboutMe    display={this.props.aboutMeStatus}/>
                <Portfolio  display={this.props.portfolioStatus}/>
                <ContactMe  display={this.props.contactStatus}/>
            </div>
        )
    }
};

export default ContentBox;