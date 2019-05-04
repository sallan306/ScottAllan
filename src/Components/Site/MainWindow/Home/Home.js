import React, { Component } from "react";
import "./Home.css"
import myPicuture from "../../../../Resources/Images/BetterBackground2.jpg"
                
class Home extends Component {
    state = {
        IamA: ["A Web Designer", "A Software Engineer", "A UI/UX Enthusiast","A SEO Optimizer","A Dinosaur", "100 Percent Geek"],
        selected: "A Web Designer",
        jobRandomColor: ["#000080","maroon","orange", "teal"],
        jobText: "",
        oldWord: "A Web Designer",
        jobColor: "#000080",
        oldColor: "black"
    }

    addLetters = () => {
        this.setState({cursorStatus: "active"})
        var addLettersInterval =setInterval(()=> {
            if(this.state.selected.length > 0) {
                this.setState({
                    jobText: (this.state.jobText +this.state.selected[0]),
                    selected: this.state.selected.slice(1),
                })
            }
            else {
                this.setState({
                    oldWord: this.state.jobText,
                    oldColor: this.state.jobColor
                })
                this.blinkingCursorBefore()
                clearInterval(addLettersInterval)
            }
        },75)

    }
    eraseLetters = () => {
        this.setState({cursorStatus: "active"})
        var eraseLettersInterval = setInterval(()=> {
            if(this.state.jobText.length > 0) {
                this.setState({
                    jobText: this.state.jobText.slice(0,this.state.jobText.lastIndexOf())
                })
            }
            else {
                this.blinkingCursorAfter()
                clearInterval(eraseLettersInterval)
            }
        },25)

    }
    blinkingCursorBefore = () => {
        this.setState({cursorStatus: "inactiveCursor"})
        setTimeout(() => this.eraseLetters(), 1000)
    }
    blinkingCursorAfter = () => {
        this.setState({cursorStatus: "inactiveCursor"})
        setTimeout(()=> this.newWord(), 1000)
        
    }
    newWord = () => {
        this.setState({
            selected: this.state.IamA[Math.floor(Math.random()*this.state.IamA.length)],
            jobColor: this.state.jobRandomColor[Math.floor(Math.random()*this.state.jobRandomColor.length)]
        })
        if (this.state.selected === this.state.oldWord || this.state.oldColor === this.state.jobColor) {
            this.newWord()
        }
        else (
            this.addLetters()
        )
    }

    componentDidMount() {
        this.addLetters()
    }

    render() {
        return (
            <div 
                ref={this.props.homeRef} 
                id="home"

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
                        style={{color: this.state.jobColor, transition: "0.1s", cursor: "auto"}}> 
                        {" "+this.state.jobText} 
                    </span>
                    <span className={this.state.cursorStatus} >|</span>
                </span>
                    <span className="homeArrowContainer" onClick={() => this.props.goToPage("about")}>
                        <i class="homeArrow down"></i>
                     </span>

                {/* {console.log(this.props.homeRef.current)} */}
            </div>

        )
    }
};

export default Home;