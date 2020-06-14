import React from "react" 
import {Link} from "react-router-dom"
import 'remixicon/fonts/remixicon.css'

function Header() {
    return (
        <header>
            <div className="upper-header-bar">
                <i className="ri-mail-line ri-2x"></i> <span>jennysmith@emailprovider.com</span>
                <i className="ri-phone-line ri-2x"></i> <span>0207 811 8055</span>
            </div>
            <div className="lower-header-bar">
                <Link to="/"><h1>Jenny Smith</h1></Link>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About</p></Link>
                <Link to="/services"><p>Services</p></Link>
                <Link to="/contact"><p>Contact</p></Link>
                <i className="ri-search-line"></i>
            <input type="text" placeholder="Search website...." ></input>
            </div>
        </header>
    )
}

export default Header