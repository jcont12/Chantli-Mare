import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={require('../images/logo.png')} alt='Chantli-Mare-logo' />
        </div>
      </header>
    );
  }
}

export default Header;
