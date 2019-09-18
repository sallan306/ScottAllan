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
                        transition: "1s",
                        borderColor: this.props.primaryColor
                    }}
                >
                    <div className="backgroundPseudo backgroundPortfolio" style={{
                            transition: this.props.changingBackground === true ? "1s" : "0s",
                            backgroundImage: "url("+this.props.backgroundBlur+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*(this.props.animalOffset+this.props.scrollPercent))
                    }}/>
                    <Slideshow 
                        primaryColor={this.props.primaryColor}
                        secondaryColor={this.props.secondaryColor}
                        screenWidth={this.props.width}
                    />
                </div>
            </div>

        )
    }
};

export default Portfolio;