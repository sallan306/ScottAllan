import React, { Component } from "react";
import "./Portfolio.css"
import PortfolioItems from "./PortfolioItems"
import BrewStashImage from "./Images/BrewStash.png"


                
class Portfolio extends Component {
    state = {
        
    }

    hoverPortfolioItem = target => {

    }
    render() {
        return (
            <div className="portfolio" >
                <h1 id="portfolioTitle">PORTFOLIO</h1>
                {PortfolioItems.map( item => {
                   { return (
                    <div className="portfolioContainer">
                        <img 
                            key={item.id} 
                            className={"portfolioImage portfolioImage"+item.name} 
                            src={BrewStashImage}
                            alt={item.name}
                            style={{margin: 20, float: "left", display: "block",width: 200, height: 200, background: "red"}}
                            onMouseEnter={() =>console.log("enter")}
                            onMouseLeave={() =>console.log("exit")}
                            onClick={() => console.log("clicked")}
                        />
                    </div>
                    )}
                })}
            </div>

        )
    }
};

export default Portfolio;