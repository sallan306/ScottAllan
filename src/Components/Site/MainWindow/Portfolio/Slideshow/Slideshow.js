import React, { Component } from "react";
import PortfolioItems from "./PortfolioItems.js"
import {AwesomeButtonSocial, AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import "./Slideshow.css"


                
class Slideshow extends Component {
    
    constructor(props) {
        super();
        this.portfolioRefs = [];
        this.dotRefs = [];

        PortfolioItems.map(item => {
            return (
                this.portfolioRefs[item.id-1] = React.createRef(),
                this.dotRefs[item.id-1] = React.createRef()
            )
        })
    }
    
    state = {
        highlighted: "",
        showInfoPanel: false,
        selectedItem: [],
        currentSlideshow: 1,
        slideshowScrollDistance: 32.5,
        slideSize: 30,
        dotColors: [ "darkred",'','','','','']
    }
    mouseEnter = value => {
        this.setState({ highlighted: value })
        // console.log("enter")
    }
    mouseLeave = () => {
        this.setState({ highlighted: "" })
        // console.log("exit")
    }
    mouseClicked = () => {
        // console.log("clicked")
    }
    displayMoreInfo = item => {

        this.setState({
            showInfoPanel: true,
            selectedItem: item
        })
        // console.log("bing!")
        document.addEventListener('mousedown', () => {

            this.setState({
                showInfoPanel: false
            })

        })
    }
    componentDidMount() {

        this.portfolioRefs[0].current.classList.remove("unselected")
        this.dotRefs[0].current.classList.add("dotSelected")


    }
    componentDidUpdate() {

            // this.portfolioRefs[this.state.currentSlideshow-1].current.classList.remove("unselected")
            // this.dotRefs[this.state.currentSlideshow-1].current.classList.add("dotSelected")

    }

    goToPortfolioItem = selectedDot => {
        this.setState({
            currentSlideshow: parseInt(selectedDot),
            slideshowScrollDistance: ((selectedDot-1)*(-this.state.slideSize)+32.5)
        })
        PortfolioItems.map( item => {
            return (
                this.portfolioRefs[item.id-1].current.classList.add("unselected"),
                this.dotRefs[item.id-1].current.classList.remove("dotSelected")
            )
        })
        // console.log(selectedDot)
        this.dotHovered(selectedDot)
        this.portfolioRefs[selectedDot-1].current.classList.remove("unselected")
        this.dotRefs[selectedDot-1].current.classList.add("dotSelected")
        
    }
    moveDirection = direction => {
        if (this.state.currentSlideshow > 1 && direction === "left") {
            this.setState({
                currentSlideshow: parseInt(this.state.currentSlideshow) - 1
                }, ()=> {
                    this.goToPortfolioItem(this.state.currentSlideshow) 
            })
        }
        if (this.state.currentSlideshow < 6 && direction === "right") {
            this.setState({
                currentSlideshow: parseInt(this.state.currentSlideshow) + 1
                }, ()=> {
                    this.goToPortfolioItem(this.state.currentSlideshow)
            })
        }

    }
    dotHovered = itemID => {
        var tempArray = []
        for (var i = 1; i<7;i++) {
            if (i === parseInt(itemID)) {
                // console.log(itemID + " matches")

                tempArray[i-1] = this.props.secondaryColor

            }
            else {
                tempArray[i-1] = this.props.primaryColor
            }
        }
        this.setState({
            dotColors: tempArray
        })
    }
    dotUnHovered = () => {
        var tempArray = []
        for (var i = 1; i<7;i++) {
            console.log("i: "+i+"selectedItem: "+this.state.currentSlideshow)
            if (i === parseInt(this.state.currentSlideshow)) {
                tempArray[i-1] = this.props.secondaryColor
                console.log("yay")
            }
            else {
                tempArray[i-1] = this.props.primaryColor
            }
        }
        this.setState({
            dotColors: tempArray
        })
    }
    render() {
        return (
            <div id="slideshow" className="slideshow" style={{position: "relative", zIndex: 10}}>
            {/* <div className="debugger">
            {"current slideshow: "+this.state.currentSlideshow}
            {"map length: "+this.selectedItem}
            </div> */}

                <div className="infoPanel" style={{opacity: this.state.showInfoPanel ? 1 : 0, visibility: this.state.showInfoPanel ? "visible" : "hidden"}}>
                    <p className="infoPanelDescription">{this.state.selectedItem.description}</p>
                    <ul>
                        {
                            this.state.selectedItem.technologies ? 
                            this.state.selectedItem.technologies.map(function(item, i) { 
                                return (<li className="infoPanelListItem" key={i}>{item}</li>)
                            }) :
                            "nothing"
                        }
                    </ul>
                </div>
                <div id="portfolioItemsContainer" className="portfolioItemsContainer" style={{left: this.state.slideshowScrollDistance+"vw"}}>
                    {PortfolioItems.map( item => 
                    { return (
                        <div style={{borderColor: this.props.primaryColor, background: this.props.primaryColor === "black" ? "white" : "black"}}ref={this.portfolioRefs[item.id-1]}key={"container"+item.id} id={"container"+item.id} className={"portfolioContainer unselected portfolioContainer"+item.id }>
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
                    <div 
                        onClick={()=> this.moveDirection("left")} 
                        className={this.state.currentSlideshow !== 1 ? "navArrowActive navArrowLeft" : "navArrowInactive navArrowLeft"}
                        style={{borderColor: this.props.primaryColor}}
                        >
                    </div>
                    {
                        
                        PortfolioItems.map( item => {
                            return (
                                <div 
                                    ref={this.dotRefs[item.id-1]}
                                    key={item.id} 
                                    
                                    style={{backgroundColor: 
                                        this.state.dotColors[item.id-1] === '' ? this.props.primaryColor : this.state.dotColors[item.id-1] 
                                    
                                    }}
                                    onClick={() => this.goToPortfolioItem(item.id)}
                                    id={"dotNumber"+item.id}
                                    className={"dot"}
                                    onMouseEnter={()=> this.dotHovered(item.id)}
                                    onMouseLeave={()=> this.dotUnHovered()}
                                    >
                                </div>
                            )
                        })
                    }
                    <div  
                        onClick={()=> this.moveDirection("right")} 
                        className={this.state.currentSlideshow !== 6 ? "navArrowActive navArrowRight" : "navArrowInactive navArrowRight"}
                        style={{borderColor: this.props.primaryColor}}>
                    </div>
                </span>

            </div>

        )
    }
};

export default Slideshow;