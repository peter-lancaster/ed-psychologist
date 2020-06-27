import React from "react" 
import {slide as Menu} from "react-burger-menu"
import {Link} from "react-router-dom"
import "remixicon/fonts/remixicon.css"

function MobileHeader(event) {

    return (
        <>
        <header className="mobile-header">
            <div className="mobile-upper-header-bar">
                <i className="ri-mail-line ri-1.5x"></i> <span>jennywilson@emailprovider.com</span>
                <i className="ri-phone-line "></i> <span>0207 811 8055</span>
            </div>
            <div className="mobile-lower-header-bar">
                    <h1><Link to="/">Jenny Wilson</Link></h1>
            </div>
         </header>



        <Menu > 
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/contact-formik">Contact</Link></p>
            <div className="mobile-lower-header-search-box">
                <input type="text" placeholder="Search website...." ></input>
                <i className="ri-search-line ri-2x"></i>
            </div>
           </Menu>
        </>

    )
}

export default MobileHeader