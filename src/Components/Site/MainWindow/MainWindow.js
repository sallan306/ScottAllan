import React, {Component} from "react";
import './MainWindow.css';
import Home from "./Home/Home"
import About from "./About/About"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"
import Footer from "../Utilities/Footer/Footer"


                
class MainWindow extends Component {

    render() {
        return (
            
        <div id="mainWindow" className="mainWindow" onScroll={ ()=> this.props.getPercentage()}>   
            {<div className="testVar2">{this.props.scrollPercent}</div>}
            
            <Home scrollPercent={this.props.scrollPercent}/>
            <div className="dummyBox">
                <div id="demoRef"></div>
                <div id="homeRef"></div>
                <div id="aboutRef"></div>
                <div id="servicesRef"></div>
                <div id="portfolioRef"></div>
                <div id="contactRef"></div>
            </div>
            <About selectedNav={this.props.selectedNav}/>
            <Services selectedNav={this.props.selectedNav}/>
            <Portfolio selectedNav={this.props.selectedNav}/>
            <Contact selectedNav={this.props.selectedNav}/>
            <Footer/>
        </div>

        )
    }
};

export default MainWindow;