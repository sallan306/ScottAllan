import React from "react";
import Slideshow from "./Slideshow/Slideshow"

function Portfolio(props) {


    const portfolioStyle = {
        width: "40%",
        marginLeft: "30%",
        marginTop: "1%",
        visibility: "hidden"
    }
    return (
        <div className="portfolio mainContent" style={portfolioStyle}>
           <Slideshow/>
        </div>
    );
};

export default Portfolio;
                
