import React, { Component } from 'react';
import '../../App.css';
import Greg from './dining/greg';
import Menu from './dining/menu';

class Dining extends Component {
  render() {
      return (
        <div className='dining'>
          <Greg />
          <Menu />
        </div>
      );
    }
}

export default Dining;
