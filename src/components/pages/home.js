import React, { Component } from 'react';
import '../../App.css';
import BlockLeft from './home/blockLeft';
import BlockCenter from './home/blockCenter';
import BlockRight from './home/blockRight';
import HomeGallery from './home/gallery';

class Home extends Component {
  render() {
      return (
        <div className='home'>
          <h1> "Experience a relaxing stay in one of Mexico's most beautiful coasts. Our intimate boutique hotel is the perfect refuge from your troubles" </h1>
          <BlockLeft />
          <BlockCenter />
          <BlockRight />
          <HomeGallery />
        </div>
      );
    }
}

export default Home;
