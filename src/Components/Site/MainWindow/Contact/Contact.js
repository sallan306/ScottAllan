import React, { Component } from "react";
import "./Contact.css"

         
class Contact extends Component {

    render() {
        return (
            <div id="contact" className="contact" style={{ opacity: this.props.selectedNav === "contact" ? 1 : 0}}>
                <h1 id="contactTitle" className="navbarReference1" >CONTACT</h1>
                Email me at sallan306@gmail.com
            </div>

        )
    }
};

export default Contact;