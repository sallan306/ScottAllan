import React, { Component } from "react";
import "./Contact.css"

         
class Contact extends Component {

    render() {
        return (
            <div id="contact" className="contact" style={{ opacity: this.props.selectedNav === "contact" ? 1 : 0}}>
                <p className="paragraph1" >
                    You can reach me for professional inquiries by contacting me via email, 
                    at
                    <br/><br/>
                    <button onclick="copyEmailToClipboard()"> sallan306@gmail.com </button>
                    <br/> <br/> 
                    I am currently accepting freelance commissions or projects! 
                </p>
                <div class="middle">
                    <a className="btn" href="https://github.com/sallan306">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="btn" href="https://www.linkedin.com/in/scott-allan-360a1289/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="btn" href="https://www.linkedin.com/in/scott-allan-360a1289/">
                        <i className="fab fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>

        </div>
        )
    }
};

export default Contact;