import React, { Component } from 'react';
import '../../App.css';
import Greg from './diningComponents/greg';
import Menu from './diningComponents/menu';

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
