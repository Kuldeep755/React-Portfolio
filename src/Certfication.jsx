import React from "react";
import WhatImage from "./WhatsApp Image 2023-05-28 at 7.37.48 PM.jpeg"
export default function Certification (props){
    return(
        <>
        <div className="certfication">
        <img src={WhatImage} alt="javaScript" id="Certification">{props.Certification}</img>
        </div>
        </>
    );
}