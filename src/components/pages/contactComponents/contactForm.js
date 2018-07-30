import React, { Component } from 'react';
import '../../../App.css';

class ContactForm extends Component {
  render() {
    return(
      <div id="background-contact-form">
        <div id="contact-form">
          <h3> Getting in Touch </h3>
          <form action="https://formspree.io/jorgeacontrerasl@gmail.com" method="POST">
            <label> First Name: </label>
            <input type="text" name="First Name"/>
            <label> Last Name: </label>
            <input type="text" name="Last Name"/>
            <label>E-mail:</label>
            <input type="email" name="_replyto"/>
            <label>Message:</label>
            <input id="message" type="text" name="message"/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
