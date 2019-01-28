import React from "react";
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import ContactMe from "./ContactMe/ContactMe"
import ButtonBox from "./ButtonBox/ButtonBox"

function LinksExtensions(props) {
    return (
        <div>       
            <span id="myName">Scott Allan</span>
                <ButtonBox/>
                <AboutMe/>
                <Portfolio/>
                <ContactMe/>
        </div>
    );
};

export default LinksExtensions;
                
