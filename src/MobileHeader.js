import React from "react" 
import {slide as Menu} from "react-burger-menu"
import {Link} from "react-router-dom"
import "remixicon/fonts/remixicon.css"

function MobileHeader(event) {

    // function showSettings(event) {
    //     event.preventDefault()
    // }

    return (
        <>
        <header>
        <div className="upper-header-bar">
            <i className="ri-mail-line ri-2x"></i> <span>jennywilson@emailprovider.com</span>
            <i className="ri-phone-line ri-2x"></i> <span>0207 811 8055</span>
        </div>
        <div className="mobile-lower-header-bar">
                <h1><Link to="/">Jenny Wilson, educational psychologist</Link></h1>
        </div>
        </header>
        <Menu>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/contact-homegrown">Home Grown Contact Form</Link></p>
            <p><Link to="/contact-formik">Formik Contact Form</Link></p>
        </Menu>
        </>

    )
}

export default MobileHeader