import React, { Component } from "react";
import webDesign from "../Images/webDesign.svg"   
import seo from "../Images/seo.svg"    
                
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
                            backgroundImage: "url("+this.props.backgroundBlur+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent)
                    }}/>
                    <div className="servicesContainer">
                        <img alt="web Design"width="200" height="200"src={webDesign}/>
                        <img alt="seo Optimized"width="200" height="200"src={seo}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Services;