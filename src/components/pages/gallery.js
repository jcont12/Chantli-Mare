import React, { Component } from 'react';
import '../../App.css';
import Pictures from './galleryComponents/pictures'

class Gallery extends Component {
  render() {
      return (
        <div id="gallery">
          <Pictures />
        </div>
      );
    }
}

export default Gallery;
