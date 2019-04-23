import React, { Component } from "react";
import "./Services.css"
                
class Services extends Component {

    render(props) {
        return (
            <div id="services"className="services" style={{ opacity: this.props.selectedNav === "services" ? 1 : 0}}>
            </div>
        )
    }
};

export default Services;