import React, { Component } from 'react';
import '../App.css';

class CoverImage extends Component {
  constructor () {
    super()
    this.state = {
      pageImage: 'contact'
    }
  }
  render() {
    if (this.state.pageImage === 'index') {
      return (
        <div className='crop'>
          <img className='cover' src={require('../images/Chantli_Front_View.jpg')} alt='Hotel-Front-View' />
        </div>
      );
    } else if (this.state.pageImage === 'hotel') {
      return(
        <div className='crop'>
          <img className='cover' src={require('../images/Stay_with_us.jpg')} alt='Hotel-View' />
        </div>
      );
    } else if (this.state.pageImage === 'dining') {
      return(
        <div className='crop'>
          <img className='cover' src={require('../images/Every_day_a_Feast.jpg')} alt='Tables-set-for-dinner' />
        </div>
      );
    } else if (this.state.pageImage === 'activities') {
      return(
        <div className='crop'>
          <img className='cover' src={require('../images/activities.jpg')} alt='Sea-and-boat' />
        </div>
      );
    } else if (this.state.pageImage === 'gallery') {
      return(
        <div className='crop'>
          <img className='cover' src={require('../images/Palmar.jpg')} alt='Palm-trees' />
        </div>
      );
    } else if (this.state.pageImage === 'testimonials') {
      return(
        <div className='crop'>
          <img className='cover' src={require('../images/Boutique.jpg')} alt='Palm-trees' />
        </div>
      );
    } else if (this.state.pageImage === 'contact') {
      return(
        <div className='crop'>
          <img className='cover' src={require('../images/Flowers.jpg')} alt='Palm-trees' />
        </div>
    );
  }
}
}

export default CoverImage;
