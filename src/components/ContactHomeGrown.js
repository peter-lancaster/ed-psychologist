import React from "react" 

// This approach uses basic html5 validation described in here 
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

function ContactHomeGrown() {

    return(
        <div className="homegrown-contact-main">
            <p className="general-heading-font">Contact</p>
            <p>Please contact me using one of the methods below, and I will endeavour to get back to you as quickly as possible.</p>
            <p>Telephone: 0207 811 8055</p>
            <p>Email: jennywilson@emailprovider.com</p>
            <p>Alternatively, please send me a message via the contact form below : </p>

            <form>
                <div className="form-element" >
                <label for="firstName">First Name</label> 
                    <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    placeholder="First Name"
                    required
                    ></input>
                </div>
                    <div className="form-element" >
                <label for="lastName">Last Name </label>
                    <input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    placeholder="Last Name" 
                    required
                    ></input>
                    </div>

                    <div className="form-element" >
                
                <label for="email">Your email address </label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Email address" 
                    required
                    ></input>
                    </div>

                    <div className="form-element" >
                
                <label for="message">Your message  </label>
                    <textarea 
                    name="message" 
                    id="message"
                    placeholder="Please type your message here"
                    required
                    ></textarea>
                    </div>
                <div className="form-element" >
                <button
                >Send message</button>
                </div>
            </form>

        </div>

    )
}


export default ContactHomeGrown