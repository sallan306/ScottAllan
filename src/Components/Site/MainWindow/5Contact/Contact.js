import React, { Component } from "react";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope);
const googleLink =
    "https://docs.google.com/document/d/1398GwI2E9cjyegMS-tycNLruSHrBdSgUatJ1CsDm5Ss/edit?usp=sharing",
  emailLink = "mailto:sallan306@gmail.com",
  linkedInLink = "http://www.linkedin.com/in/ScottAllanWebDesign",
  githubLink = "https://github.com/sallan306";

class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    githubHover: false,
    linkedinHover: false,
    emailHover: false,
    resumeHover: false
  };
  submitForm = event => {
    event.preventDefault();
  };
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };
  spinOnce = input => {
    this.setState({ [input]: true });
    setTimeout(() => this.setState({ [input]: false }), 2000);
  };
  render() {
    return (
      <div className="windowRef" ref={this.props.contactRef}>
        <div
          id="contact"
          className="contact"
          style={{
            borderColor: this.props.primaryColor
          }}
        >
          <div
            className="backgroundPseudo backgroundContact"
            style={{
              transition: this.props.changingBackground === true ? "1s" : "0s",
              backgroundImage: "url(" + this.props.backgroundBlur + ")",
              backgroundPositionY:
                this.props.backgroundScrollSpeed *
                (this.props.animalOffset + this.props.scrollPercent)
            }}
          />
          <span className="contactContent">
            <p
              className="contactParagraph"
              style={{
                color: this.props.primaryColor,
              }}
            >
              I am currently accepting freelance commissions and job offers in
              the Portland, OR area. Please contact me using the links below!
            </p>

            <a
              className="btn socialMediaButtons"
              onMouseEnter={() => this.spinOnce("githubHover")}
              href={githubLink}
              style={{ color: this.props.secondaryColor }}
            >
              <FontAwesomeIcon
                spin={this.state.githubHover}
                style={{ transition: "1s" }}
                color={this.props.secondaryColor}
                size="3x"
                icon={["fab", "github"]}
              />
              <p className="socialMediaDescription">Github</p>
            </a>
            <a
              className="btn socialMediaButtons"
              onMouseEnter={() => this.spinOnce("linkedinHover")}
              href={linkedInLink}
              style={{ color: this.props.secondaryColor }}
            >
              <FontAwesomeIcon
                spin={this.state.linkedinHover}
                style={{ transition: "1s" }}
                color={this.props.secondaryColor}
                size="3x"
                icon={["fab", "linkedin"]}
              />
              <p className="socialMediaDescription">linkedin</p>
            </a>
            <a
              className="btn socialMediaButtons"
              onMouseEnter={() => this.spinOnce("emailHover")}
              href={emailLink}
              style={{ color: this.props.secondaryColor }}
            >
              <FontAwesomeIcon
                spin={this.state.emailHover}
                style={{ transition: "1s" }}
                color={this.props.secondaryColor}
                size="3x"
                icon={faEnvelope}
              />
              <p className="socialMediaDescription">Email</p>
            </a>
            <a
              className="btn socialMediaButtons"
              onMouseEnter={() => this.spinOnce("resumeHover")}
              href={googleLink}
              style={{ color: this.props.secondaryColor }}
            >
              <FontAwesomeIcon
                spin={this.state.resumeHover}
                style={{ transition: "1s" }}
                color={this.props.secondaryColor}
                size="3x"
                icon={faFileAlt}
              />
              <p className="socialMediaDescription">Resume</p>
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
