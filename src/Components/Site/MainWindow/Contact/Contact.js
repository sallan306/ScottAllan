import React, { Component } from "react";
import "./Contact.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'  

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

                    }}
                >
                    <div className="backgroundPseudo backgroundContact" style={{
                            backgroundImage: "url("+this.props.backgroundPicture+")",
                            backgroundPositionY: (-8*this.props.scrollPercent),
                            backgroundAttachment: "fixed",
                            zIndex: 1
                    }}/>
                    <span className="contactContent" style={{position: "relative", zIndex: 10}}>
                        <p style={{position: "relative", zIndex: 10}} className="contactParagraph" >
                            I am currently accepting freelance commissions. Please contact me using the form below. 
                        </p>
                        <form style={{position: "relative", zIndex: 10}} onSubmit={event => this.submitForm(event)}>
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


                        <a className="btn socialMediaButtons" href="https://github.com/sallan306">
                        <FontAwesomeIcon size="3x" icon={["fab","github"]}/>
                        </a>
                        <a className="btn socialMediaButtons" href="http://www.linkedin.com/in/ScottAllanWebDesign">
                            <FontAwesomeIcon size="3x" icon={["fab","linkedin"]}/>
                        </a>
                        <a className="btn socialMediaButtons" href="mailto:sallan306@gmail.com">
                        <FontAwesomeIcon size="3x" icon={faEnvelope}/>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
};

export default Contact;