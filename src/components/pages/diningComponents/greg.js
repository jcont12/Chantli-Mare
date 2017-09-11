import React, { Component } from 'react';
import '../../../App.css';

class Greg extends Component {
  render() {
    return(
      <div className='dining-greg'>
        <h3> 'Greg Couillard, Chef' </h3>
        <img src={require('../../../images/Greg.jpg')} />
        <p> 'Food is an integral part of our experience, so Chantli Mare is proud to team up with Greg Couillard. Greg is one of the most influential chefs in the Toronto culinary scene. With over 40 years of experience in restaurants, which include heading a number of restaurants in Toronto and New York, and serving as personal chefs to the stars, Chef Greg brings his talent to your table for a delicious dining experience.'</p>
      </div>
    )
  }
}

export default Greg
