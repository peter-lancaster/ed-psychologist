import React from "react" 
import {Link} from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import NavItem from "./components/NavItem"

function Header() {
    return (
        <header>
            <div className="upper-header-bar">
                <i className="ri-mail-line ri-2x"></i> <span>jennysmith@emailprovider.com</span>
                <i className="ri-phone-line ri-2x"></i> <span>0207 811 8055</span>
            </div>

            {/* react-router "Link"s inside html element tags <p> <h1> etc
            so that you can apply styling in CSS file */}

            <div className="lower-header-bar">

                <h1><Link to="/">Jenny Smith</Link></h1>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/services">Services</Link></p>
                <p><Link to="/contact">Contact</Link></p>

                {/* <NavItem text={"Contact"} router-component={Link} /> */}
                <div className="lower-header-search-box">
                    <i className="ri-search-line ri-2x"></i>
                    <input type="text" placeholder="Search website...." ></input>
                </div>
            </div>
        </header>
    )
}

export default Header