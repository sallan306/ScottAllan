import React, { Component } from "react";
import SEO from "./SVG/SEO";
import WebDesign from "./SVG/WebDesign";
import Responsive from "./SVG/Responsive";
import Border1 from "./SVG/Border1";
import Border2 from "./SVG/Border2";
import Border3 from "./SVG/Border3";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faNode,
  faJsSquare,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

class Services extends Component {
  state = {};
  componentDidMount() {}
  icons = () => {
    return (
      <div className="iconBox">
        <FontAwesomeIcon
          className={
            this.props.width > 800 ? "awesomeIcon" : "awesomeIconSmall"
          }
          size={this.props.width > 920 ? "2x" : "1x"}
          icon={faReact}
          color={this.props.secondaryColor}
        />
        <FontAwesomeIcon
          className={
            this.props.width > 800 ? "awesomeIcon" : "awesomeIconSmall"
          }
          size={this.props.width > 920 ? "2x" : "1x"}
          icon={faCss3}
          color={this.props.secondaryColor}
        />
        <FontAwesomeIcon
          className={
            this.props.width > 800 ? "awesomeIcon" : "awesomeIconSmall"
          }
          size={this.props.width > 920 ? "2x" : "1x"}
          icon={faHtml5}
          color={this.props.secondaryColor}
        />
        <FontAwesomeIcon
          className={
            this.props.width > 800 ? "awesomeIcon" : "awesomeIconSmall"
          }
          size={this.props.width > 920 ? "2x" : "1x"}
          icon={faNode}
          color={this.props.secondaryColor}
        />
        <FontAwesomeIcon
          className={
            this.props.width > 800 ? "awesomeIcon" : "awesomeIconSmall"
          }
          size={this.props.width > 920 ? "2x" : "1x"}
          icon={faJsSquare}
          color={this.props.secondaryColor}
        />
        <FontAwesomeIcon
          className={
            this.props.width > 800 ? "awesomeIcon" : "awesomeIconSmall"
          }
          size={this.props.width > 920 ? "2x" : "1x"}
          icon={faGithub}
          color={this.props.secondaryColor}
        />
      </div>
    );
  };
  isMobile = () => {
    if (this.props.width > 420) {
      return (
        <div className="servicesContainer">
          <div className="serviceBox web">
            <WebDesign
              fillColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            />
            <Border1
              fillColor={this.props.secondaryColor}
              borderWidth={this.props.width}
            />
            <p
              style={{ color: this.props.primaryColor, paddingTop: this.props.width > 920 ? 30 : 10 }}
              className="serviceBlurb"
            >
              Fluid Front-End development with effective User Experience
              solutions that draws users back to your site
            </p>
          </div>
          <div className="serviceBox seo">
            <SEO
              fillColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            />
            <Border2
              fillColor={this.props.secondaryColor}
              borderWidth={this.props.width}
            />
            <p
              style={{ color: this.props.primaryColor, paddingTop: this.props.width > 920 ? 30 : 10 }}
              className="serviceBlurb"
            >
              Proper Search Engine Optimization and Indexing so your voice gets
              the attention that it deserves
            </p>
          </div>
          <div className="serviceBox responsive">
            <Responsive
              fillColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            />
            <Border3
              fillColor={this.props.secondaryColor}
              borderWidth={this.props.width}
            />
            <p
              style={{ color: this.props.primaryColor, paddingTop: this.props.width > 920 ? 15 : 5 }}
              className="serviceBlurb"
            >
              Responsiveness across multiple platforms and devices. Your
              customers won't be limited by the shape of their screen
            </p>
          </div>
          {this.icons()}
        </div>
      );
    } else {
      return (
        <div className="servicesContainer">
          <div className="serviceBox web">
            <WebDesign
              fillColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            />
            <p
              style={{ color: this.props.primaryColor }}
              className="serviceBlurb"
            >
              Fluid Front-End development with effective User Experience
              solutions that draws users back to your site
            </p>
            {/* <Border1 fillColor={this.props.primaryColor}/> */}
          </div>
          <div className="serviceBox seo">
            <SEO
              fillColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            />
            <p
              style={{ color: this.props.primaryColor }}
              className="serviceBlurb"
            >
              Proper Search Engine Optimization and Indexing so your voice gets
              the attention that it deserves
            </p>
            {/* <Border2 fillColor={this.props.primaryColor}/> */}
          </div>
          <div className="serviceBox responsive">
            <Responsive
              fillColor={this.props.primaryColor}
              secondaryColor={this.props.secondaryColor}
            />
            <p
              style={{ color: this.props.primaryColor }}
              className="serviceBlurb"
            >
              Responsiveness across multiple platforms and devices. Your
              customers won't be limited by the shape of their screen
            </p>
            {/* <Border3 fillColor={this.props.primaryColor}/> */}
          </div>
          {this.icons()}
        </div>
      );
    }
  };

  render(props) {
    return (
      <div ref={this.props.servicesRef} className="windowRef">
        {/* <p>{this.props.width}</p> */}
        {/* <p>{this.props.width/1000}</p>
                <p>{this.state.borderWidth}</p> */}
        <div
          id="services"
          className="services"
          style={{
            borderColor: this.props.primaryColor
          }}
        >
          <div
            className="backgroundPseudo backgroundServices"
            style={{
              transition: this.props.changingBackground === true ? "1s" : "0s",
              backgroundImage: "url(" + this.props.backgroundBlur + ")",
              backgroundPositionY:
                this.props.backgroundScrollSpeed *
                (this.props.animalOffset + this.props.scrollPercent)
            }}
          />
          {this.isMobile()}
        </div>
      </div>
    );
  }
}

export default Services;
