import React, { Component } from "react"; 
import SEO from "./SVG/SEO"   
import WebDesign from "./SVG/WebDesign"                

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
                        <div className="serviceBox web">
                            <WebDesign fillColor={this.props.fontColor}/>
                            <p style={{color: this.props.fontColor}} className="serviceBlurb">i feel this way about that</p>                       
                        </div>
                        <div className="serviceBox seo">
                            <SEO fillColor={this.props.fontColor}/>
                            <p style={{color: this.props.fontColor}} className="serviceBlurb">I feel that way about this</p>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Services;