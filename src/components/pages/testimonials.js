import React, { Component } from 'react';
import '../../App.css';
import CustomerReviews from './testimonialsComponents/customerReviews';
import Header from '../headerComponents/header';

class Testimonials extends Component {
  render() {
      return (
        <div id="testimonials">
        <Header/>
          <div className="crop">
            <img className="testimonials-cover" src={require("../../images/Boutique.jpg")} alt="Palm-trees" />
            <h1 className="cover-title"> Testimonials </h1>
          </div>
          <div className="h1-container">
            <h1> See what our guests are sharing about their stay!</h1>
          </div>
          <CustomerReviews />
        </div>
      );
    }
}

export default Testimonials;
