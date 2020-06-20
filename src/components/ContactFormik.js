import React from 'react';
import {useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactFormik = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    
    const formik = useFormik({

      initialValues: {
        firstName: "",
        lastName: "",
        email: '',
      },

      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },

    });

    return (
      <div className="homegrown-contact-main">
      <p className="general-heading-font">Contact</p>
      <p>Please contact me using one of the methods below, and I will endeavour to get back to you as quickly as possible.</p>
      <p>Telephone: 0207 811 8055</p>
      <p>Email: jennywilson@emailprovider.com</p>
      <p>Alternatively, please send me a message via the contact form below : </p>
      
      
      <form onSubmit={formik.handleSubmit}>
      <div className="form-element" >
        <label htmlFor="firstName">First Name</label>
        <input 
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          />
          </div>
        <div className="form-element" >
        <label htmlFor="lastName">Last Name</label>
        <input 
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          />
                    </div>
        <div className="form-element" >
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
                  </div>
        <div className="form-element" >
        <button type="submit">Submit</button>
        </div>

      </form>
      </div>
    );

  };

export default ContactFormik