import React, { Component } from "react";
import "./About.css"
import myPicuture from "../../../../Resources/Images/MeBackyard.jpg"                
class About extends Component {

    render() {
        return (<div                         
                    ref={this.props.aboutRef}
                    className="windowRef">
                    <div 
                        id="about" 
                        className="about" 
                        
                        style={{ 
                            background: this.props.backgroundColor,
                            opacity: this.props.selectedNav === "about" ? 1 : 0, 
                            visibility: this.props.selectedNav === "about" ? "visible" : "hidden"}}
                    >
                        <h1 
                            id="aboutTitle" 
                            className="navbarReference">ABOUT</h1>
                        <div className="container aboutContainer">
                            <div className="row">
                                <img id="aboutMeCard" className="col-md-5"src={myPicuture} alt="me" />
                                <div className="col-md-7">
                                    <p className="paragraph1">
                                        From 5 years old i have loved the content behind a screen, and to this day I remain strong in my quest to be the ultimate computer nerd. 
                                        I have a passion for visually appealing and effective web solutions, and have been honing my skills for years. I want your site
                                        to stand out among the sea of never ending websites; engaging the user and drawing them back via compelling UI techniques and actually useful
                                        functionality.  I look forward to creating a unique corner of the internet with you!

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
};

export default About;