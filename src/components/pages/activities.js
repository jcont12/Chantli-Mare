import React, { Component } from 'react';
import '../../App.css';
import OnLand from './activitiesComponents/onLand';
import AtSea from './activitiesComponents/atSea';

class Activities extends Component {
  render() {
      return (
        <div id="activities">
          <h1>Kick back and relax or have fun in the sun - endless opportunities for enjoyment to be found.</h1>
          <OnLand />
          <AtSea />
        </div>
      );
    }
}

export default Activities;
