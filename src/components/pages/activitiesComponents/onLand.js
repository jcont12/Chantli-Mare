import React, { Component } from 'react';
import '../../../App.css';

class OnLand extends Component {
  render(){
    return(
      <div className='activities-onLand'>
        <h3> On Land </h3>
        <div id='activities-p'>
          <p><b>Golf at El Tamarindo</b> Magical 18-hole course that starts in a tropical rainforest and winds its way down to the beach. Plenty of vistas and wildlife await!</p>
          <p><b>Mangrove Nature Tour</b> Guided boat tour through nearby mangroves where you can admire tropical birds and the resident crocodiles, or visit the newly completed boardwalk and hanging bridge is you want to tour on foot.</p>
          <p><b>Town Hopping</b> La Manzanilla, Melaque, Barra de Navidad, we are a short distance away of these small charming towns where you can enjoy the Sunday Market, artisanal shops or charming restaurants.</p>
          <p><b>Massage</b> Let us know and we can arrange for a massage in your room or terrace.</p>
        </div>
        <img id='activities-img' src={require('../../../images/Coconuts.jpg')}/>
      </div>
    )
  }
}

export default OnLand
