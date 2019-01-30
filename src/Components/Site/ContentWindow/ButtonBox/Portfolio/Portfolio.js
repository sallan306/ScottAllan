import React, { Component } from "react";
import classnames from 'classnames';
import Slideshow from "./Slideshow/Slideshow"
                
class Portfolio extends Component {


    render(props) {
        return (
                <div className={classnames("portfolio mainContent" , this.props.display)} >
                    <Slideshow/>
                </div>

        )
    }
};

export default Portfolio;