import React, { Component } from "react";
import "./Home.css"
import myPicuture from "../../../../Resources/Images/MeBackyardWide.jpg"
                
class Home extends Component {

    handleParallax = () => {

    }

    render() {
        return (
                <div className="home" >
                    <h1 id="homeTitle" className="navbarReference">HOME</h1>
                    <img id="homePic" src={myPicuture} alt="Scott Allan" style={{top:(-4*this.props.scrollPercent)}} />

                </div>

        )
    }
};

export default Home;