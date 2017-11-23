import React, { Component } from 'react';
import '../../App.css';
import OnLand from './activitiesComponents/onLand';
import AtSea from './activitiesComponents/atSea';
import Header from '../headerComponents/header';

class Activities extends Component {
  render() {
      return (
        <div id="activities">
        <Header/>
          <div className="crop">
            <img className="activities-cover" src={require("../../images/activity.jpg")} alt="Sea-and-boat" />
            <h1 className="cover-title"> Activities </h1>
          </div>
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
