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

    };
    
    handleScroll = event => {
        let x = document.getElementById("mainWindow").scrollTop;
        if (x >= 0 && x < 880) {
            this.props.scrollPastSection("Home")
        }
        else if (x >= 880 && x < 1600) {
            this.props.scrollPastSection("About")
        }
        else if (x >= 1600 && x < 2100) {
            this.props.scrollPastSection("Services")
        }
        else if (x >= 2100 && x < 3500) {
            this.props.scrollPastSection("Portfolio")
        }
        else if (x >= 3500 && x < 4000) {
            this.props.scrollPastSection("Contact")
        }
    }
    render(props) {
        return (

        <div id="mainWindow" className="mainWindow" onScroll={this.handleScroll}>   

            <Home/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>

        </div>

        )
    }
};

export default MainWindow;