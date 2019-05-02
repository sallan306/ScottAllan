import React, { Component } from "react";
import "./Contact.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
var email 	= require("emailjs");

library.add(fab, faEnvelope)

         
class Contact extends Component {

    state = {
        firstName: "",
        lastName: "",
        subject: "",
        email: ""
        
    }
    submitForm = event => {

        event.preventDefault()


    }
    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div
                className="windowRef"
                ref={this.props.contactRef}>
                <div 
                    id="contact" 
                    className="contact" 
                    style={{ 
                        opacity: this.props.selectedNav === "contact" ? 1 : 0}}
                >
                    <p className="paragraph1" >
                        I am currently accepting freelance commissions. Please contact me using the form below. 
                    </p>
                    <form onSubmit={event => this.submitForm(event)}>
                        <input 
                            onChange={this.changeHandler} 
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName} 
                            placeholder="First Name"
                            type="text"
                            required
                        /><br/>
                        <input 
                            onChange={this.changeHandler} 
                            id="lastName"
                            name="lastName" 
                            value={this.state.lastName}  
                            placeholder="Last Name" 
                            type="text"
                            required
                        /><br/>
                        <input 
                            onChange={this.changeHandler} 
                            id="email"
                            name="email"    
                            value={this.state.email}     
                            placeholder="Email"     
                            type="email"
                            required
                        /><br/>
                        <button>Submit</button>
                    </form>


                        <a className="btn" href="https://github.com/sallan306">
                        <FontAwesomeIcon size="3x" icon={["fab","github"]}/>
                        </a>
                        <a className="btn" href="https://www.linkedin.com/in/scott-allan-360a1289/">
                            <FontAwesomeIcon size="3x" icon={["fab","linkedin"]}/>
                        </a>
                        <a className="btn" href="https://www.linkedin.com/in/scott-allan-360a1289/">
                        <FontAwesomeIcon size="3x" icon={faEnvelope}/>
                        </a>
                    
                </div>
            </div>
        )
    }
};

export default Contact;