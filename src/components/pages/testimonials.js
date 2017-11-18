import React, { Component } from 'react';
import '../../App.css';
import CustomerReviews from './testimonialsComponents/customerReviews';

class Testimonials extends Component {
  render() {
      return (
        <div id="testimonials">
          <div className="h1-container">
            <h1> See what our guests are sharing about their stay!</h1>
          </div>  
          <CustomerReviews />
        </div>
      );
    }
}

export default Testimonials;
