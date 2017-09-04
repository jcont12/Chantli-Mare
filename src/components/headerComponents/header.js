import React, { Component } from 'react';
import '../../App.css';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
      return (
        <header>
          <nav className='menu options'>
            <img id='logo' src={require('../../images/logo.png')} alt='Chantli-Mare-logo' />
            <Link to='/' className='nav-options' onClick={() => this.setState('index')}> HOME </Link>
            <Link to='/Hotel' className='nav-options' onClick={() => this.setState('hotel')}> HOTEL </Link>
            <Link to='/Dining' className='nav-options' onClick={() => this.setState('dining')}> DINING </Link>
            <Link to='/Activities' className='nav-options' onClick={() => this.setState('activities')}> ACTIVITIES </Link>
            <Link to='/Gallery' className='nav-options' onClick={() => this.setState('gallery')}> GALLERY </Link>
            <Link to='/Testimonials' className='nav-options' onClick={() => this.setState('testimonials')}> TESTIMONIALS </Link>
            <Link to='/Contact' className='nav-options' onClick={() => this.setState('contact')}  > CONTACT </Link>
          </nav>
        </header>
      );
    }
}

export default Header;
