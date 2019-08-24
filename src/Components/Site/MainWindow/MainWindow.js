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
            style={{marginTop: this.props.sideNavVisible ? "7.5vh" : "7.5vh"}}
            onScroll={ ()=> this.props.getPercentage()}
        >   
            {/* {<div className="testVar2">{this.props.changingBackground ? "true" : "false"}</div>} */}
            {/* {<div className="testVar">{this.props.selectedNav}</div>}  */}
            {/* {<div className="testVar">{this.props.navbarVisible ? "true" : "false"}</div>} */}
            <Home 
                homeRef={this.props.homeRef}
                scrollPercent={this.props.scrollPercent}
                goToPage={this.props.goToPage}
                navbarVisible={this.props.navbarVisible}
                backgroundPicture={this.props.backgroundPicture}
                primaryColor={this.props.primaryColor}
                backgroundScrollSpeed={this.props.backgroundScrollSpeed}
                animalOffset={this.props.animalOffset}
                
            />
            <About 
                selectedNav={this.props.selectedNav}
                aboutRef={this.props.aboutRef}
                backgroundColor={this.props.backgroundColor}
                primaryColor={this.props.primaryColor}
                scrollPercent={this.props.scrollPercent}
                backgroundBlur={this.props.backgroundBlur}
                backgroundScrollSpeed={this.props.backgroundScrollSpeed}
                changingBackground={this.props.changingBackground}
                width={this.props.width}
                animalOffset={this.props.animalOffset}
            />
            <Services 
                servicesRef={this.props.servicesRef}
                selectedNav={this.props.selectedNav}
                backgroundColor={this.props.backgroundColor}
                primaryColor={this.props.primaryColor}
                scrollPercent={this.props.scrollPercent}
                backgroundBlur={this.props.backgroundBlur}
                backgroundScrollSpeed={this.props.backgroundScrollSpeed}
                changingBackground={this.props.changingBackground}
                secondaryColor={this.props.secondaryColor}
                width={this.props.width}
                animalOffset={this.props.animalOffset}
            />
            <Portfolio 
                selectedNav={this.props.selectedNav}
                portfolioRef={this.props.portfolioRef}
                backgroundColor={this.props.backgroundColor}
                primaryColor={this.props.primaryColor}
                scrollPercent={this.props.scrollPercent}
                backgroundBlur={this.props.backgroundBlur}
                backgroundScrollSpeed={this.props.backgroundScrollSpeed}
                changingBackground={this.props.changingBackground}
                secondaryColor={this.props.secondaryColor}
                width={this.props.width}
                animalOffset={this.props.animalOffset}
            />
            <Contact
                selectedNav={this.props.selectedNav}
                contactRef={this.props.contactRef}
                backgroundColor={this.props.backgroundColor}
                primaryColor={this.props.primaryColor}
                scrollPercent={this.props.scrollPercent}
                backgroundBlur={this.props.backgroundBlur}
                backgroundScrollSpeed={this.props.backgroundScrollSpeed}
                changingBackground={this.props.changingBackground}
                secondaryColor={this.props.secondaryColor}
                animalOffset={this.props.animalOffset}
            />
            {/* <Footer/> */}
        </div>

        )
    }
};

export default MainWindow;