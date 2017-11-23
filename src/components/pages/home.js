import React, { Component } from 'react';
import '../../App.css';
import BlockLeft from './homeComponents/blockLeft';
import BlockCenter from './homeComponents/blockCenter';
import BlockRight from './homeComponents/blockRight';
import HomeGallery from './homeComponents/gallery';
import Header from '../headerComponents/header';

class Home extends Component {
  render() {
      return (
        <div id="home">
          <Header/>
          <div className="crop">
            <img className="home-cover" src={require("../../images/FrontView4.jpg")} alt="Hotel-Front-View" />
            <h1 className="cover-title"> Home </h1>
          </div>
          <div className="h1-container">
            <h1> {"Experience a relaxing stay in one of Mexico's most beautiful coasts."} </h1>
          </div>
          <div id="home-blocks">
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
