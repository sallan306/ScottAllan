import React, { Component } from "react";
import "./Portfolio.css"
import Slideshow from "./Slideshow/Slideshow";
import animalPic from "../../../../Resources/Images/BetterBackground2.jpg"     


                
class Portfolio extends Component {
    state = {

    }

    render() {
        return (
            <div                         
                ref={this.props.portfolioRef}
                className="windowRef">
                <div 
                    id="portfolio"
                    className="portfolio" 
                    style={{ 
                    }}
                >
                    <div className="backgroundPseudo backgroundPortfolio" style={{
                            backgroundImage: "url("+animalPic+")",
                            backgroundPositionY: (-8*this.props.scrollPercent),
                            backgroundAttachment: "fixed",
                            zIndex: 1
                    }}/>
                    <Slideshow/>
                </div>
            </div>

        )
    }
};

export default Portfolio;