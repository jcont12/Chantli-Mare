import React, { Component } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';

class BlockCenter extends Component {
  render() {
    return (
      <div className='home-block-center'>
        <h3> Every Day a Feast </h3>
        <img className='home-block-img' src={require('../../../images/Every_day_a_Feast.jpg')} />
        <p>We believe good food is an integral part of any vacation so we made an effort to bring you the very best. Delight on our menu prepared by chef extraordinaire Greg Couillard while taking in the views up and down the empty beaches. Stay for dinner and you will always be on hand for and awe inspiring sunset.</p>
        <Link to='/Dining' className='nav-options'> Our Restaurant > </Link>
      </div>
    )
  }
}

export default BlockCenter
