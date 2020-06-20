import React, {useContext} from "react" 
import {Link} from "react-router-dom"
import {Context} from "./ContextProvider"
import 'remixicon/fonts/remixicon.css'


function Header() {

    const {isBurgerNav} = useContext(Context)


    return (
        <header>
            <div className="upper-header-bar">
                <i className="ri-mail-line ri-2x"></i> <span>jennywilson@emailprovider.com</span>
                <i className="ri-phone-line ri-2x"></i> <span>0207 811 8055</span>
            </div>

            {/* react-router "Link"s inside html element tags <p> <h1> etc
            so that you can apply styling in CSS file */}

            <div className="lower-header-bar">

                <h1><Link to="/">Jenny Wilson</Link></h1>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/services">Services</Link></p>
                <p><Link to="/contact-homegrown">Home Grown Contact Form</Link></p>
                <p><Link to="/contact-formik">Formik Contact Form</Link></p>
                <div className="lower-header-search-box">
                    <input type="text" placeholder="Search website...." ></input>
                    <i className="ri-search-line ri-2x"></i>
                </div>
            </div>
        </header>
    )
}

export default Header