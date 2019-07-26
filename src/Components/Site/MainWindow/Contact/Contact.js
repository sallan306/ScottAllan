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
        email: "",
        githubHover: false,
        linkedinHover: false,
        emailHover: false
        
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
    spinOnce = input => {
        this.setState({[input]: true})
        setTimeout(()=> this.setState({[input]: false}),2000)
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
                            backgroundImage: "url("+this.props.backgroundBlur+")",
                            backgroundPositionY: (this.props.backgroundScrollSpeed*this.props.scrollPercent)
                    }}/>
                    <span className="contactContent" style={{position: "relative", zIndex: 10}}>
                        <p style={{color: this.props.fontColor, position: "relative", zIndex: 10}} className="contactParagraph" >
                            I am currently accepting freelance commissions. Please contact me using the links below. 
                        </p>

                        <a  className="btn socialMediaButtons"  
                            onMouseEnter={() => this.spinOnce("githubHover")} 
                            href="https://github.com/sallan306">
                            <FontAwesomeIcon spin={this.state.githubHover} color={this.props.fontColor} size="3x" icon={["fab","github"]}/>
                        </a>
                        <a className="btn socialMediaButtons" 
                            onMouseEnter={() => this.spinOnce("linkedinHover")} 
                            href="http://www.linkedin.com/in/ScottAllanWebDesign">
                            <FontAwesomeIcon spin={this.state.linkedinHover} color={this.props.fontColor} size="3x" icon={["fab","linkedin"]}/>
                        </a>
                        <a className="btn socialMediaButtons" 
                            onMouseEnter={() => this.spinOnce("emailHover")} 
                            href="mailto:sallan306@gmail.com">
                            <FontAwesomeIcon spin={this.state.emailHover} color={this.props.fontColor} size="3x" icon={faEnvelope}/>
                        </a>
                    </span>
                </div>
            </div>
        )
    }
};

export default Contact;