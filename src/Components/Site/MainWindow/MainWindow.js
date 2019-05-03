import React, {Component} from "react";
import './MainWindow.css';
import Home from "./Home/Home"
import About from "./About/About"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"       
class MainWindow extends Component {
    state = {
        backgroundColor: this.props.backgroundColor,
        fontColor: this.props.fontColor

    }
    render() {
        return (
            
        <div 
            id="mainWindow" 
            className="mainWindow" 
            onScroll={ ()=> this.props.getPercentage()}
        >   
            {/* {<div className="testVar2">{this.props.scrollPercent}</div>}
            {<div className="testVar">{this.props.selectedNav}</div>} */}
            <Home 
                homeRef={this.props.homeRef}
                scrollPercent={this.props.scrollPercent}
                
            />
            <About 
                selectedNav={this.props.selectedNav}
                aboutRef={this.props.aboutRef}
                backgroundColor={this.state.backgroundColor}
            />
            <Services 
                servicesRef={this.props.servicesRef}
                selectedNav={this.props.selectedNav}
                backgroundColor={this.state.backgroundColor}
            />
            <Portfolio 
                selectedNav={this.props.selectedNav}
                portfolioRef={this.props.portfolioRef}
                backgroundColor={this.state.backgroundColor}
            />
            <Contact
                selectedNav={this.props.selectedNav}
                contactRef={this.props.contactRef}
                backgroundColor={this.state.backgroundColor}
            />
            {/* <Footer/> */}
        </div>

        )
    }
};

export default MainWindow;