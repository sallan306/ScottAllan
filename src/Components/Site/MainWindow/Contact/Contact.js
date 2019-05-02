import React, { Component } from "react";
import "./Contact.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 

library.add(fab, faEnvelope)

         
class Contact extends Component {

    state = {
        formInformation: [["firstName",""],["lastName",""],["email",""],["otherInfo",""]]
        
    }
    submitForm = () => {

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
                        You can reach me for professional inquiries by contacting me via email, 
                        at
                        <br/><br/>
                        <button> sallan306@gmail.com </button>
                        <br/> <br/> 
                        I am currently accepting freelance commissions or projects! 
                    </p>
                    <form onSubmit={()=> this.submitForm()}>
                        {/* <input type="text">First Name</input>
                        <input type="text">Last Name</input>
                        <input type="text">Email</input> */}
                        <button>Sumit</button>
                    </form>

                    <div className="middle">
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
            </div>
        )
    }
};

export default Contact;