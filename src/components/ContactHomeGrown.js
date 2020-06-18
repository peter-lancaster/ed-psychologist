import React from "react" 

function ContactHomeGrown() {

    return(
        <div className="homegrown-contact-main">
            <p className="general-heading-font">Contact</p>
            <p>Please contact me using one of the methods below, and I will endeavour to get back to you as quickly as possible.</p>
            <p>Telephone: 01653 648806</p>
            <p>Email: jennywilson@emailprovider.com</p>
            <p>Alternatively, please complete the contact form below</p>

            <form>
                <label>First Name: 
                    <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name"
                    required
                    ></input>
                </label>
                <label>Last Name: 
                    <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    required
                    ></input>
                </label>
                <label>Your email address: 
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Email address" 
                    required
                    ></input>
                </label>
                <label>Your message: 
                    <textarea 
                    name="message" 
                    placeholder="Please type your message here"
                    required
                    ></textarea>
                </label>
                <button
                >Send message</button>
            </form>

        </div>

    )
}


export default ContactHomeGrown