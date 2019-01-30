import React, { Component } from "react";
import "./ButtonBox.css"

                
class ButtonBox extends Component {

    render() {
        return (
                <div className="buttonsBox">
                    <button onClick={this.props.aboutMeClick}     className="customButton aboutMeButton">About</button>
                    <button onClick={this.props.portfolioClick}   className="customButton portfolioButton">Portfolio</button>
                    <button onClick={this.props.contactClick}     className="customButton contactButton">Contact</button>
                </div> 
        )
    }
};

export default ButtonBox;