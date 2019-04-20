import React, { Component } from "react";
import "./Home.css"
import myPicuture from "../../../../Resources/Images/MeBackyardWide.jpg"
                
class Home extends Component {

    render(props) {
        return (
                <div className="home" >
                    <h1 id="homeTitle" className="navbarReference">HOME</h1>
                    <img id="aboutMePic" src={myPicuture} alt="me" />

                </div>

        )
    }
};

export default Home;