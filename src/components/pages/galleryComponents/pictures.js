import React, { Component } from 'react';
import '../../../App.css'

class Pictures extends Component {
  render() {
    return(
      <div id="gallery-pictures">
        <img className="gallery-img" src={require("../../../images/Frontview2.jpg")} />
        <img className="gallery-img" src={require("../../../images/nightview.jpg")} />
        <img className="gallery-img" src={require("../../../images/monita.jpg")} />
        <img className="gallery-img" src={require("../../../images/Palmar.jpg")} />
        <img className="gallery-img" src={require("../../../images/Poolview.jpg")} />
        <img className="gallery-img" src={require("../../../images/Sunset1.jpg")} />
        <img className="gallery-img" src={require("../../../images/Sunset2.jpg")} />
      </div>
    )
  }
}

export default Pictures
