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
            
        <div 
            id="mainWindow" 
            className="mainWindow" 
            onScroll={ ()=> this.props.getPercentage()}
        >   
            {<div className="testVar2">{this.props.scrollPercent}</div>}
            {<div className="testVar">{this.props.selectedNav}</div>}
            <Home 
                homeRef={this.props.homeRef}
                scrollPercent={this.props.scrollPercent}
            />
            <About 
                selectedNav={this.props.selectedNav}
                aboutRef={this.props.aboutRef}
            />
            <Services 
                servicesRef={this.props.servicesRef}
                selectedNav={this.props.selectedNav}/>
            <Portfolio 
                selectedNav={this.props.selectedNav}
                portfolioRef={this.props.portfolioRef}
            />
            <Contact
                selectedNav={this.props.selectedNav}
                contactRef={this.props.contactRef}
            />
            <Footer/>
        </div>

        )
    }
};

export default MainWindow;