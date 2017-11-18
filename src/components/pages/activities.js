import React, { Component } from 'react';
import '../../App.css';
import OnLand from './activitiesComponents/onLand';
import AtSea from './activitiesComponents/atSea';

class Activities extends Component {
  render() {
      return (
        <div id="activities">
          <div className="h1-container">
            <h1>Kick back and relax or have fun in the sun - endless enjoyment to be found.</h1>
          </div>
          <OnLand />
          <AtSea />
        </div>
      );
    }
}

export default Activities;
