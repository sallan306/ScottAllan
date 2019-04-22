import React, { Component } from "react";
import "./Services.css"
                
class Services extends Component {

    render(props) {
        return (
            <div className="services" style={{position: this.props.servicesStatic ? "fixed" : "relative"}}>
                <h1 id="servicesTitle">SERVICES</h1>
            </div>

        )
    }
};

export default Services;