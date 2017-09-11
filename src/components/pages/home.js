import React, { Component } from 'react';
import '../../App.css';
import BlockLeft from './homeComponents/blockLeft';
import BlockCenter from './homeComponents/blockCenter';
import BlockRight from './homeComponents/blockRight';
import HomeGallery from './homeComponents/gallery';

class Home extends Component {
  render() {
      return (
        <div className='home'>
          <h1> {"Experience a relaxing stay in one of Mexico's most beautiful coasts. Our intimate boutique hotel is the perfect refuge from your troubles"} </h1>
          <div className='home-blocks'>
          <BlockLeft />
          <BlockCenter />
          <BlockRight />
          </div>
          <HomeGallery />
        </div>
      );
    }
}

export default Home;
