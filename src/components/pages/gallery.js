import React, { Component } from 'react';
import '../../App.css';
import Pictures from './galleryComponents/pictures'
import Header from '../headerComponents/header';

class Gallery extends Component {
  render() {
      return (
        <div id="gallery">
        <Header/>
        <div className="crop">
          <img className="gallery-cover" src={require("../../images/Alejandro.jpg")} alt="Palm-trees" />
          <h1 className="cover-title"> Gallery </h1>
        </div>
        <div className="h1-container">
          <h1> Experience the beauty of nature at its finest! </h1>
        </div>
          <Pictures />
        </div>
      );
    }
}

export default Gallery;
