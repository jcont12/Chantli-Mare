import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  constructor () {
    super()
    this.state = {
      pageImage: 'index'
    }
  }
  render() {
    if (this.state.pageImage === 'index') {
      return (
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p className='nav-options'> HOME </p>
            <p className='nav-options'> HOTEL </p>
            <p className='nav-options'> DINING </p>
            <p className='nav-options'> ACTIVITIES </p>
            <p className='nav-options'> GALLERY </p>
            <p className='nav-options'> TESTIMONIALS </p>
            <p className='nav-options'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Chantli_Front_View.jpg')} alt='Hotel-Front-View' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'home') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Stay_with_us.jpg')} alt='Hotel-View' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'hotel') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Chantli_Front_View.jpg')} alt='Hotel-Front-View' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'dining') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Every_day_a_Feast.jpg')} alt='Tables-set-for-dinner' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'activities') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/activities.jpg')} alt='Sea-and-boat' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'gallery') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Palmar.jpg')} alt='Palm-trees' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'testimonials') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Boutique.jpg')} alt='Palm-trees' />
          </div>
        </header>
      );
    } else if (this.state.pageImage === 'contact') {
      return(
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
            <p id='home'> HOME </p>
            <p id='hotel'> HOTEL </p>
            <p id='dining'> DINING </p>
            <p id='activities'> ACTIVITIES </p>
            <p id='gallery'> GALLERY </p>
            <p id='testimonials'> TESTIMONIALS </p>
            <p id='contact'> CONTACT </p>
          </nav>
          <div className='crop'>
            <img className='cover' src={require('../images/Flowers.jpg')} alt='Palm-trees' />
          </div>
        </header>
      );
    }
  }
}

export default Header;
