import React, { Component } from "react";
import PortfolioItems from "./PortfolioItems"
import {AwesomeButtonSocial, AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import "./Portfolio.css"


                
class Portfolio extends Component {
    state = {
        highlighted: "",
        showInfoPanel: false,
        selectedItem: []
    }

    mouseEnter = value => {
        this.setState({ highlighted: value })
        console.log("enter")
    }
    mouseLeave = () => {
        this.setState({ highlighted: "" })
        console.log("exit")
    }
    mouseClicked = () => {
        console.log("clicked")
    }
    displayMoreInfo = item => {
        this.setState({
            showInfoPanel: true,
            selectedItem: item
        })
        console.log("bing!")
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
                        opacity: this.props.selectedNav === "portfolio" ? 1 : 0
                    }}
                >
                <div className="infoPanel" style={{visibility: this.state.showInfoPanel ? "visible" : "hidden"}}>
                    <p className="infoPanelDescription">{this.state.selectedItem.description}</p>
                    <ul>
                        {
                            this.state.selectedItem.technologies ? 
                            this.state.selectedItem.technologies.map(function(item, i) { 
                                return (<li key={i}>{item}</li>)
                            }) :
                            "nothing"
                        }
                    </ul>
                </div>
                    {PortfolioItems.map( item => 
                    { return (
                        <div key={"container"+item.id}className="portfolioContainer">
                            <img 
                                key={"image"+item.id} 
                                className={this.state.highlighted === item.id ? "imgHighlighted portfolioImage" :"portfolioImage"} 
                                src={item.imgURL}
                                alt={item.name}

                            />
                            <div                             
                                onMouseEnter={() => this.mouseEnter(item.id)}
                                onMouseLeave={() => this.mouseLeave()} 
                                className={this.state.highlighted === item.id ? "highlighted hiddenContainer" : "hiddenContainer"} >
                                <p  
                                    key={"title"+item.id}
                                    className={"portfolioTitle"}>{item.name}            
                                </p>
                                <div className="buttonBox">
                                    <AwesomeButtonSocial   size="icon" href={item.github} type="github" ></AwesomeButtonSocial>
                                    <AwesomeButton   size="icon" href={item.liveLink} >DEMO</AwesomeButton>
                                    <AwesomeButton   size="icon" onPress={() => this.displayMoreInfo(item)} >INFO</AwesomeButton>
                                </div>
                                <h6  
                                    key={"paragraph"+item.id}
                                    className="portfolioTitle2">{item.shortDescription}
                                </h6>
                            </div>
                        </div>
                        )}
                    )}
                </div>
            </div>

        )
    }
};

export default Portfolio;