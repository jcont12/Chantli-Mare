import React, { Component } from 'react';
import '../../App.css';
import Pictures from './galleryComponents/pictures'

class Gallery extends Component {
  render() {
      return (
        <div id="gallery">
        <div className="h1-container">
          <h1> Experience the beauty of nature at its finest! </h1>
        </div>
          <Pictures />
        </div>
      );
    }
}

export default Gallery;
