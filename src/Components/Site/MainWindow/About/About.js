import React, { Component } from "react";
import "./About.css"
import myPicuture from "../Images/MeBackyard.jpg";         
import myPicutureWide from "../Images/MeBackyardWide.jpg"     
class About extends Component {

    render() {
        return (
        
                <div                         
                    ref={this.props.aboutRef}
                    className="windowRef">
                    <div 
                        id="about" 
                        className="about" 
                        style={{ 
                            transition: "1s",
                            borderColor: this.props.primaryColor
                        }}
                    >
                    <div className="backgroundPseudo backgroundAbout" style={{
                            transition: this.props.changingBackground === true ? "1s" : "0s",
                            backgroundImage: "url("+this.props.backgroundBlur+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*(this.props.animalOffset+this.props.scrollPercent)),
                    }}/>
                        <div style={{position: "relative",zIndex: 11}}className="container aboutContainer">
                            <div className="centerImage">
                                <img    style={{
                                            transition: "1s",
                                            borderColor: this.props.primaryColor
                                        }}
                                        className="aboutMeCard" 
                                        src={ this.props.width > 420 ? myPicuture : myPicutureWide} 
                                        alt="me" />
                            </div>
                            <div className="centerParagraph">
                                <p className="paragraph1" style={{ transition: "1s",color: this.props.primaryColor}}>
                                    From 5 years old i have loved the content behind a screen, and to this day I remain strong in my quest to be the ultimate computer nerd. 
                                    I have a passion for visually appealing and effective web solutions, and have been honing my skills for years. I want your site
                                    to stand out among the sea of never ending websites; engaging the user and drawing them back via compelling UI techniques and actually useful
                                    functionality.  I look forward to creating a unique corner of the internet with you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
};

export default About;