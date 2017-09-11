import React, { Component } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

class HomeGallery extends Component {
  render() {
    return (
      <div className='home-gallery'>
        <h3> Gallery </h3>
        <p> Visit our gallery and discover what makes us great </p>
        <Link to='/Gallery' className='nav-options'> Our Photos > </Link>
        <img src={require('../../../images/nightview2.jpg')} />
        </div>
    )
  }
}

export default HomeGallery
