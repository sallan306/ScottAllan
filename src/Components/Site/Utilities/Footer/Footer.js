import React from "react";
import "./Footer.css"
import {AwesomeButtonSocial} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

function Footer(props) {
    return (
                <footer className="myFooter">
                Copyright Scott Allan 2018
                <AwesomeButtonSocial   size="icon" href="https://github.com/sallan306" type="github" ></AwesomeButtonSocial>;

                
                <AwesomeButtonSocial   size="icon" href="http://www.linkedin.com/in/ScottAllanWebDesign" type="linkedin" ></AwesomeButtonSocial>;
                </footer>
    );
};

export default Footer;
                