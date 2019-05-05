import React, { Component } from "react";
                
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
                            backgroundImage: "url("+this.props.backgroundPicture+")",
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