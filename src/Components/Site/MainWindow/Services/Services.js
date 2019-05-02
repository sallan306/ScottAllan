import React, { Component } from "react";
import "./Services.css"
                
class Services extends Component {
componentDidMount() {
    console.log(this.props.servicesRef.current)
}
    render(props) {
        return (
            <div                         
                ref={this.props.servicesRef}
                className="windowRef">
                <div 
                    id="services"
                    className="services" 
                    style={{ opacity: this.props.selectedNav === "services" ? 1 : 0}}>
                </div>
            </div>
        )
    }
};

export default Services;