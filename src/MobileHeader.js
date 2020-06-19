import React from "react" 
import {slide as Menu} from "react-burger-menu"
import {Link} from "react-router-dom"
import "remixicon/fonts/remixicon.css"

function MobileHeader(event) {

    function showSettings(event) {
        event.preventDefault()
    }

    return (
        <Menu>

        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>


        <h1><Link to="/">Jenny Wilson</Link></h1>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/services">Services</Link></p>
        <p><Link to="/contact-homegrown">Home Grown Contact Form</Link></p>
        <p><Link to="/contact-formik">Formik Contact Form</Link></p>




        </Menu>

    )
}

export default MobileHeader