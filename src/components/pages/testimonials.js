import React, { Component } from 'react';
import '../../App.css';
import CustomerReviews from './testimonialsComponents/customerReviews';

class Testimonials extends Component {
  render() {
      return (
        <div className='testimonials'>
          <h1> See what our guests are sharing about their stay!</h1>
          <CustomerReviews />
        </div>
      );
    }
}

export default Testimonials;
