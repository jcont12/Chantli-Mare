import React, { Component } from 'react';
import '../../App.css';
import ContactForm from './contactComponents/contactForm';
import ContactInfo from './contactComponents/contactInfo';
import ContactMap from './contactComponents/contactMap';
import Directions from './contactComponents/directions';

class Contact extends Component {
  render() {
      return (
        <div id="contact">
        <div className="h1-container">
          <h1> We would love to hear from you!</h1>
        </div>
          <ContactForm />
          <ContactInfo />
          <ContactMap />
          <Directions />
        </div>
      );
    }
}

export default Contact;
