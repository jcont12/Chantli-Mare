import React, { Component } from 'react';
import '../../App.css';
import ContactForm from './contactComponents/contactForm';
import ContactInfo from './contactComponents/contactInfo';
import ContactMap from './contactComponents/contactMap';
import Directions from './contactComponents/directions';

class Contact extends Component {
  render() {
      return (
        <div className='contact'>
          <ContactForm />
          <ContactInfo />
          <ContactMap />
          <Directions />
        </div>
      );
    }
}

export default Contact;
