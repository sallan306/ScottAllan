import React, { Component } from "react";
import "./Services.css"
import animalPic from "../../../../Resources/Images/BetterBackground2.jpg"     
                
class Services extends Component {
componentDidMount() {

}
    render(props) {
        return (
            <div                         
                ref={this.props.servicesRef}
                className="windowRef">
                <div 
                    id="services"
                    className="services" 
                    style={{ 
                        }}>

                    <div className="backgroundPseudo backgroundServices" style={{
                            backgroundImage: "url("+animalPic+")",
                            backgroundPositionY: (-8*this.props.scrollPercent),
                            backgroundAttachment: "fixed",
                            zIndex: 1
                    }}/>
                </div>
            </div>
        )
    }
};

export default Services;