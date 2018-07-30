import React, { Component } from 'react';
import '../../../App.css';

class ContactMap extends Component {
  render() {
    return (
      <div id="background-contact-map">
        <div id="contact-map">
        <iframe
          width="600"
          height="450"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBNAOcju09MwJMjl6a62_PGS3RTzV_m65k&q=Chantli+Mare" allowfullscreen>
          </iframe>
          <div id="directions">
          <p>Chantli Mare is located in the coast on Highway 200 which goes from Puerto Vallarta to Manzanillo.</p>

          <p>From Puerto Vallarta: ( 3.5 hours) Take the Puerto Vallarta-Manzanillo Highway (Highway 200) to the south towards Manzanillo. After aproximately 120 miles (200 km), a sign will mark the exit to Playa Boca de Iguanas to the right. Follow the road to Playa Boca de Iguanas as it curves right for 1.2 miles (2 km) where you will see a gate and guardhouse with the hotel logo.</p>

          <p>From Manzanillo: (1 hour) Take the Puerto Vallarta-Manzanillo Highway (Highway 200) towards Puerto Vallarta. After aproximately 40 miles (65 km), a sign will mark the exit to Playa Boca de Iguanas to the right. Follow the road to Playa Boca de Iguanas as it curves right for 1.2 miles (2 km) where you will see a gate and guardhouse with the hotel logo.</p>
          </div>
        )
        </div>
      </div>
    )
  }
}

export default ContactMap
