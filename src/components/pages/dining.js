import React, { Component } from 'react';
import '../../App.css';
import Greg from './diningComponents/greg';
import Menu from './diningComponents/menu';

class Dining extends Component {
  render() {
      return (
        <div className='dining'>
        <h1> The freshest ingredients at the perfect locale - enjoy delicious beach-side feasts. </h1>
          <Greg />
          <Menu />
        </div>
      );
    }
}

export default Dining;
