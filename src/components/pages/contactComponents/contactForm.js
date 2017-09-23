import React, { Component } from 'react';
import '../../../App.css';

class ContactForm extends Component {
  render() {
    return(
      <div className='contact-form'>
        <form>
          <label> First Name: </label>
          <input type='text' name='First Name'/>
          <label> Last Name </label>
          <input type='text' name='Last Name'/>
          <label>E-mail</label>
          <input type='email' name='email address'/>
          <label>Message</label>
          <input id='message' type='text' name='message'/>
          <input type='submit' value='Submit!'/>
        </form>
      </div>
    )
  }
}

export default ContactForm
