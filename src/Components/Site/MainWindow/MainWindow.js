import React, {Component} from "react";
import './MainWindow.css';
import Home from "./Home/Home"
import About from "./About/About"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"       
class MainWindow extends Component {
    state = {

    }
    render() {
        return (
            
        <div 
            id="mainWindow" 
            className="mainWindow" 
            style={{marginTop: this.props.sideNavVisible ? "15vh" : 0}}
            onScroll={ ()=> this.props.getPercentage()}
        >   
            {<div className="testVar2">{this.props.scrollPercent}</div>}
            {/* {<div className="testVar">{this.props.selectedNav}</div>}  */}
            {/* {<div className="testVar">{this.props.navbarVisible ? "true" : "false"}</div>} */}
            <Home 
                homeRef={this.props.homeRef}
                scrollPercent={this.props.scrollPercent}
                goToPage={this.props.goToPage}
                navbarVisible={this.props.navbarVisible}
                
            />
            <About 
                selectedNav={this.props.selectedNav}
                aboutRef={this.props.aboutRef}
                backgroundColor={this.props.backgroundColor}
                fontColor={this.props.fontColor}
            />
            <Services 
                servicesRef={this.props.servicesRef}
                selectedNav={this.props.selectedNav}
                backgroundColor={this.props.backgroundColor}
                fontColor={this.props.fontColor}
            />
            <Portfolio 
                selectedNav={this.props.selectedNav}
                portfolioRef={this.props.portfolioRef}
                backgroundColor={this.props.backgroundColor}
                fontColor={this.props.fontColor}
            />
            <Contact
                selectedNav={this.props.selectedNav}
                contactRef={this.props.contactRef}
                backgroundColor={this.props.backgroundColor}
                fontColor={this.props.fontColor}
            />
            {/* <Footer/> */}
        </div>

        )
    }
};

export default MainWindow;