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
        <h1> Getting in Touch </h1>
          <ContactForm />
          <ContactInfo />
          <ContactMap />
          <Directions />
        </div>
      );
    }
}

export default Contact;
