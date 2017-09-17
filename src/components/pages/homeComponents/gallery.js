import React, { Component } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

class HomeGallery extends Component {
  render() {
    return (
      <div className='home-gallery'>
        <div id='home-gallery-intro'>
          <h3> Gallery </h3>
          <p> Visit our gallery and discover what makes us great </p>
          <Link to='/Gallery' className='nav-options'> Our Photos > </Link>
        </div>
        <img id='home-gallery-img' src={require('../../../images/nightview2.jpg')} />
        </div>
    )
  }
}

export default HomeGallery
