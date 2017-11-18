import React, { Component } from 'react';
import '../../../App.css';

class ContactForm extends Component {
  render() {
    return(
      <div id="contact-form" action="https://formspree.io/jorgeacontrerasl@gmail.com" method="POST">
        <h3> Getting in Touch </h3>
        <form>
          <label> First Name: </label>
          <input type="text" name="First Name"/>
          <label> Last Name </label>
          <input type="text" name="Last Name"/>
          <label>E-mail</label>
          <input type="email" name="_replyto"/>
          <label>Message</label>
          <input id="message" type="text" name="message"/>
          <input type="submit" value="Submit!"/>
        </form>
      </div>
    )
  }
}

export default ContactForm
