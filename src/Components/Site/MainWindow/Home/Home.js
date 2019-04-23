import React, { Component } from "react";
import "./Home.css"
import myPicuture from "../../../../Resources/Images/MeBackyardWide.jpg"
                
class Home extends Component {
    state = {
        IamA: ["A Web Designer", "A Software Engineer", "A UI/UX Enthusiast", "A SEO Optimizer","A Dinosaur", "100 Percent Geek"],
        selected: "A Web Designer"
    }
    newWord = () => {
        setInterval(() => {
            this.setState({selected: this.state.IamA[Math.floor(Math.random()*this.state.IamA.length)]}) 
        }, 1000)


    }
    componentDidMount() {
        this.newWord()
    }

    render() {
        return (
                <div id="home"className="home" >
                    <img id="homePic" src={myPicuture} alt="Scott Allan" style={{top:(-4*this.props.scrollPercent)}} />
                    <span id="myName"className="myName">Hello, I'm Scott. {this.state.selected} </span>

                </div>

        )
    }
};

export default Home;