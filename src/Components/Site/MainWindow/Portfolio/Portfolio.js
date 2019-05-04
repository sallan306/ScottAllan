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
                        background: this.props.backgroundColor,
                        opacity: this.props.selectedNav === "portfolio" ? 1 : 0
                            }}
                >
                    <Slideshow/>
                </div>
            </div>

        )
    }
};

export default Portfolio;