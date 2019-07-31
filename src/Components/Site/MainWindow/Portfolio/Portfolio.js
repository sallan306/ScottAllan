import React, { Component } from "react";
import "./Portfolio.css"
import Slideshow from "./Slideshow/Slideshow";  


                
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
                            transition: this.props.changingBackground === true ? "1s" : "0s",
                            backgroundImage: "url("+this.props.backgroundBlur+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent)
                    }}/>
                    <Slideshow fontColor={this.props.fontColor}/>
                </div>
            </div>

        )
    }
};

export default Portfolio;