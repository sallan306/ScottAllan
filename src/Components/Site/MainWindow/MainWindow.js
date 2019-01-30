import React, {Component} from "react";
import ButtonBox from "./ButtonBox/ButtonBox"
import './MainWindow.css';
import ContentBox from "./ContentBox/ContentBox";



                
class MainWindow extends Component {
    state = {
        aboutMeStatus: "none",
        portfolioStatus: "none",
        contactStatus: "none"
    };
    
    aboutMeClick = () => {
        console.log('About is clicked!!');
        if(this.state.aboutMeStatus === "initial"){
            this.setState({
                aboutMeStatus: "none",
                portfolioStatus: "none",
                contactStatus: "none"
        })
        }
        else {
            this.setState({
                aboutMeStatus: "initial",
                portfolioStatus: "none",
                contactStatus: "none"
            })
        }
      };
    portfolioClick = () => {
        console.log('port is clicked!!');
        if(this.state.portfolioStatus === "initial"){
            this.setState({
                aboutMeStatus: "none",
                portfolioStatus: "none",
                contactStatus: "none"
            })
        }
        else {
            this.setState({
                aboutMeStatus: "none",
                portfolioStatus: "initial",
                contactStatus: "none"
            })
        }
      };
    
    contactClick = () => {
        console.log('contact is clicked!!');
        if(this.state.contactStatus === "initial"){
            this.setState({
                aboutMeStatus: "none",
                portfolioStatus: "none",
                contactStatus: "none"
            })
        }
        else {
            this.setState({
                aboutMeStatus: "none",
                portfolioStatus: "none",
                contactStatus: "initial"
            })
        }
      };

    render(props) {
        return (

            <div className="mainWindow">       
            <span className="myName">Scott Allan</span>
                <ButtonBox
                aboutMeClick={this.aboutMeClick}
                portfolioClick={this.portfolioClick}
                contactClick={this.contactClick}
                />
                <ContentBox     
                aboutMeStatus={this.state.aboutMeStatus}
                portfolioStatus={this.state.portfolioStatus}
                contactStatus={this.state.contactStatus}
                />
        </div>

        )
    }
};

export default MainWindow;