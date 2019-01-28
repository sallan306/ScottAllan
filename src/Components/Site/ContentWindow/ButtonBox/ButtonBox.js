import React from "react";

function aboutMeClick() {

}

function portfolioClick() {

}

function contactClick() {

}

function ButtonBox(props) {
    return (
        <div>

                <span id="buttonBox">
                    <button onClick={aboutMeClick()} className="customButton" id="aboutMeButton">About Me</button>
                    <button onClick={portfolioClick()}className="customButton" id="portfolioButton">Portfolio</button>
                    <button onClick={contactClick()}className="customButton" id="contactButton">Contact</button>
                </span> 

        </div>
    );
};

export default ButtonBox;
                
