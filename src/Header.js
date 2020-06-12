import React from "react" 
import {Link} from "react-router-dom"
import 'remixicon/fonts/remixicon.css'

function Header() {
    return (
        <header>
            <div className="upper-header-bar">
                <i class="ri-phone-line"></i> <span>0113 2857 7373</span>
                <i class="ri-mail-line"></i> <span>janicewonky@emailprovider.com</span>
            </div>
            <div className="lower-header-bar">
            <h1>Janice Wonky</h1>
                <Link to="/"><p>Home</p></Link>
                <Link to="/about"><p>About me</p></Link>
                <Link to="/services"><p>Services</p></Link>
                <Link to="/contact"><p>Contact me</p></Link>
            <input type="text" placeholder="Search website...." ></input>
            </div>
        </header>
    )
}

export default Header