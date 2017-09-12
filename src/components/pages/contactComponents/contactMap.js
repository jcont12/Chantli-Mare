import React, { Component } from 'react';
import '../../../App.css';

class ContactMap extends Component {
  render() {
    return (
      <div className='contact-map'>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBNAOcju09MwJMjl6a62_PGS3RTzV_m65k&q=Chantli+Mare" allowfullscreen>
        </iframe>
      </div>
    )
  }
}

export default ContactMap
