import React, { Component } from "react";
import PortfolioItems from "./PortfolioItems.js"
import {AwesomeButtonSocial, AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import "./Slideshow.css"


                
class Slideshow extends Component {
    state = {
        highlighted: "",
        showInfoPanel: false,
        selectedItem: [],
        currentSlideshow: 1,
        slideshowScrollDistance: 22.5,
        mappedItems: []
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
        document.addEventListener('mousedown', () => {

            this.setState({
                showInfoPanel: false
            })

        })
    }
    componentDidMount() {
        document.getElementById("dotNumber1").classList.add("dotSelected")
        document.getElementById("container1").classList.remove("unselected")



    


    }
    navigate = direction => {
        if (direction === "left") {
            if (this.state.currentSlideshow > 1 ){
                PortfolioItems.map( item => {
                    return (
                        document.getElementById("dotNumber"+item.id).classList.remove("dotSelected"),
                        document.getElementById("container"+item.id).classList.add("unselected")
                        )
                    })
                    this.setState({
                        
                        currentSlideshow: this.state.currentSlideshow-1,
                        slideshowScrollDistance: this.state.slideshowScrollDistance + 30
                    
                    }, () => {

                        document.getElementById("dotNumber"+this.state.currentSlideshow).classList.add("dotSelected")
                        document.getElementById("container"+this.state.currentSlideshow).classList.remove("unselected")
                    })

            }
        }
        if (direction === "right") {
            if (this.state.currentSlideshow < PortfolioItems.length ){
                PortfolioItems.map( item => {
                    return (
                        document.getElementById("dotNumber"+item.id).classList.remove("dotSelected"),
                        document.getElementById("container"+item.id).classList.add("unselected")
                        )
                    })
                this.setState({
                    
                    currentSlideshow: this.state.currentSlideshow+1,
                    slideshowScrollDistance: this.state.slideshowScrollDistance - 30
                
                }, () => {

                    document.getElementById("dotNumber"+this.state.currentSlideshow).classList.add("dotSelected")
                    document.getElementById("container"+this.state.currentSlideshow).classList.remove("unselected")
                })

            }
        }
    }
    goToPortfolioItem = number => {
        this.setState({
            currentSlideshow: number,
            slideshowScrollDistance: ((number-1)*(-30)+22)
        })
        PortfolioItems.map( item => {
            return (
                document.getElementById("dotNumber"+item.id).classList.remove("dotSelected"),
                document.getElementById("container"+item.id).classList.add("unselected")
            )
        })
        document.getElementById("dotNumber"+number).classList.add("dotSelected")
        document.getElementById("container"+number).classList.remove("unselected")
        
    }
    render() {
        return (
            <div id="slideshow" className="slideshow">
            <div className="debugger">
            {/* {"current slideshow: "+this.state.currentSlideshow} */}
            {/* {"map length: "+this.selectedItem} */}
            </div>

                <div className="infoPanel" style={{opacity: this.state.showInfoPanel ? 1 : 0, visibility: this.state.showInfoPanel ? "visible" : "hidden"}}>
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
                <div id="portfolioItemsContainer" className="portfolioItemsContainer" style={{left: this.state.slideshowScrollDistance+"vw"}}>
                    {PortfolioItems.map( item => 
                    { return (
                        <div key={"container"+item.id} id={"container"+item.id} className={"portfolioContainer unselected portfolioContainer"+item.id }>
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
                    )})}
                </div>

                <span className="portfolioNavigation">
                    <div className="portfolioLeftArrowBox" onClick={()=> this.navigate("left")}><i className="portfolioLeftArrow"></i></div>
                    {
                        PortfolioItems.map( item => {
                            return (
                                <div key={item.id} onClick={() => this.goToPortfolioItem(item.id)}id={"dotNumber"+item.id}className={"dot"}></div>
                            )
                        })
                    }
                    <div className="portfolioRightArrowBox" onClick={()=> this.navigate("right")}><i className="portfolioRightArrow"></i></div>
                </span>

            </div>

        )
    }
};

export default Slideshow;