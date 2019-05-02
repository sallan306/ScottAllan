import React, { Component } from "react";
import "./Home.css"
import myPicuture from "../../../../Resources/Images/BetterBackground2.jpg"
                
class Home extends Component {
    state = {
        IamA: ["A Web Designer", "A Software Engineer", "A UI/UX Enthusiast","A SEO Optimizer","A Dinosaur", "100 Percent Geek"],
        selected: "A Web Designer",
        jobRandomColor: ["blue","red","yellow","orange", "teal"],
        jobColor: "black"
    }
    newWord = () => {
        setInterval(() => {
            this.setState({
                selected: this.state.IamA[Math.floor(Math.random()*this.state.IamA.length)],
                jobColor: this.state.jobRandomColor[Math.floor(Math.random()*this.state.jobRandomColor.length)]}) 
        }, 1000)


    }
    componentDidMount() {
        this.newWord()
    }

    render() {
        return (
            <div 
                ref={this.props.homeRef} 
                id="home"
                className="home" 
            >
                <img 
                    id="homePic" 
                    src={myPicuture} 
                    alt="Scott Allan" 
                    style={{top:(-8*this.props.scrollPercent)}}
                     />
                <span   
                    id="myName"
                    className="myName">Hello, I'm Scott. 
                    <span   
                        id="myJob" 
                        style={{color: this.state.jobColor}}> 
                        {" "+this.state.selected} 
                    </span>
                </span>
                {/* {console.log(this.props.homeRef.current)} */}
            </div>

        )
    }
};

export default Home;