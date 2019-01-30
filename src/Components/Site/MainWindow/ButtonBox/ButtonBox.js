import React, { Component } from "react";

                
class ButtonBox extends Component {

    render() {
        return (
                <div className="buttonsBox">
                    <button onClick={this.props.aboutMeClick}     className="customButton" id="aboutMeButton">About</button>
                    <button onClick={this.props.portfolioClick}   className="customButton" id="portfolioButton">Portfolio</button>
                    <button onClick={this.props.contactClick}     className="customButton" id="contactButton">Contact</button>
                </div> 
        )
    }
};

export default ButtonBox;