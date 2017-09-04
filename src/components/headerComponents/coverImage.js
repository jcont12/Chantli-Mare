import React, { Component } from 'react';
import '../../App.css';
import Header from './header.js'

class CoverImage extends Component {
  constructor() {
    super()
    this.state = {
      pageImage: 'index'
    };
    this.handleIndex = this.handleIndex.bind(this);
    this.handleHotel = this.handleHotel.bind(this);
    this.handleDining = this.handleDining.bind(this);
    this.handleActivities = this.handleActivities.bind(this);
    this.handleGallery = this.handleGallery.bind(this);
    this.handleTestimonials = this.handleTestimonials.bind(this)
    this.handleContact = this.handleContact.bind(this)
  }

  handleIndex() {
    this.setState({
      pageImage: 'index'
    });
  }

  handleHotel() {
    console.log(this.state.pageImage)
  }

  handleDining() {
    this.setState({
      pageImage: 'dining'
    });
  }

  handleActivities() {
    this.setState({
      pageImage: 'activities'
    });
  }

  handleGallery() {
    this.setState({
      pageImage: 'gallery'
    });
  }

  handleTestimonials() {
    this.setState({
      pageImage: 'testimonials'
    });
  }

  handleContact() {
    this.setState({
      pageImage: 'contact'
    });
  }

  render() {
    if (this.state.pageImage === 'index') {
      return (
        <div>
          <Header triggerHome={this.handleIndex} triggeHotel={this.handleHotel} triggerDining={this.handleDining}/>
          <div className='crop'>
            <img className='cover' src={require('../../images/Chantli_Front_View.jpg')} alt='Hotel-Front-View' />
          </div>
        </div>
      );
    } else if (this.state.pageImage === 'hotel') {
      return(
        <div>
          <Header triggeHotel={this.handleHotel}/>
          <div className='crop'>
            <img className='cover' src={require('../../images/Stay_with_us.jpg')} alt='Hotel-View' />
          </div>
        </div>
      );
    } else if (this.state.pageImage === 'dining') {
      return(
        <div>
          <Header triggerDining={this.handleDining} />
          <div className='crop'>
            <img className='cover' src={require('../../images/Every_day_a_Feast.jpg')} alt='Tables-set-for-dinner' />
          </div>
        </div>
      );
    } else if (this.state.pageImage === 'activities') {
      return(
        <div>
          <Header triggerActivities={this.handleActivities} />
          <div className='crop'>
            <img className='cover' src={require('../../images/activities.jpg')} alt='Sea-and-boat' />
          </div>
        </div>
      );
    } else if (this.state.pageImage === 'gallery') {
      return(
        <div>
          <Header triggerGallery={this.handleGallery}/>
          <div className='crop'>
            <img className='cover' src={require('../../images/Palmar.jpg')} alt='Palm-trees' />
          </div>
        </div>
      );
    } else if (this.state.pageImage === 'testimonials') {
      return(
        <div>
          <Header triggerTestimonials={this.handleTestimonials}/>
          <div className='crop'>
            <img className='cover' src={require('../../images/Boutique.jpg')} alt='Palm-trees' />
          </div>
        </div>
      );
    } else if (this.state.pageImage === 'contact') {
      return(
        <div>
          <Header triggerContact={this.handleContact} />
          <div className='crop'>
            <img className='cover' src={require('../../images/Flowers.jpg')} alt='Palm-trees' />
          </div>
        </div>
    );
  }
}
}

export default CoverImage;
