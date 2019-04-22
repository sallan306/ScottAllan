import React, {Component} from "react";
import './MainWindow.css';
import Home from "./Home/Home"
import About from "./About/About"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"
import Footer from "../Utilities/Footer/Footer"



                
class MainWindow extends Component {
    state = {
        scrollPercent: 0,
        aboutStatic: false,
        servicesStatic: false,
        portfolioStatic: false,
    };
    



    render() {
        return (
            
        <div id="mainWindow" className="mainWindow" onScroll={ ()=> this.props.getPercentage()}>   
            {<div className="testVar">{this.props.scrollPercent}</div>}
            <Home scrollPercent={this.props.scrollPercent}/>
            <About scrollPercent={this.props.scrollPercent}/>
            <Services scrollPercent={this.props.scrollPercent}/>
            <Portfolio scrollPercent={this.props.scrollPercent}/>
            <Contact scrollPercent={this.props.scrollPercent}/>
            <Footer scrollPercent={this.props.scrollPercent}/>
        </div>

        )
    }
};

export default MainWindow;