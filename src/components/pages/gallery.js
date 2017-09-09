import React, { Component } from 'react';
import '../../App.css';
import Pictures from './galleryComponents/pictures'

class Gallery extends Component {
  render() {
      return (
        <div className='gallery'>
          <Pictures />
        </div>
      );
    }
}

export default Gallery;
