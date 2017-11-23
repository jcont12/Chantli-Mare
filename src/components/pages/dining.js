import React, { Component } from 'react';
import '../../App.css';
import Greg from './diningComponents/greg';
import Menu from './diningComponents/menu';
import Header from '../headerComponents/header';

class Dining extends Component {
  render() {
      return (
        <div id="dining">
        <Header/>
          <div className="crop">
            <img className="dining-cover" src={require("../../images/Feast1.jpg")} alt="Tables-set-for-dinner" />
            <h1 className="cover-title"> Dining </h1>
          </div>
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
