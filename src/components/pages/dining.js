import React, { Component } from 'react';
import '../../App.css';
import Greg from './diningComponents/greg';
import Menu from './diningComponents/menu';

class Dining extends Component {
  render() {
      return (
        <div id="dining">
          <div className="h1-container">
            <h1> The freshest ingredients at the perfect locale - enjoy delicious beach-side feasts. </h1>
          </div>
          <Greg />
          <Menu />
        </div>
      );
    }
}

export default Dining;
