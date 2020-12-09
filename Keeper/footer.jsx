import React from "react";

const day = new Date();

function Footer() {
    return <p className="footer"> Copyright { day.getFullYear() } </p>
}


export default Footer;
