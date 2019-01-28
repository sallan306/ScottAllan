import React from "react";
import AboutMe from "../Javascript/AboutMe"
import Portfolio from "../Javascript/Portfolio"
import ContactMe from "../Javascript/ContactMe"
import ButtonBox from "../Javascript/ButtonBox"

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
                
