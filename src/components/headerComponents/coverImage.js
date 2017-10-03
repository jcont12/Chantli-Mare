import React, { Component } from 'react';
import '../../App.css';
import Header from './header.js'

class CoverImage extends Component {
  constructor() {
    super()
    this.state = {
      pageImage: "index"
    };
    this.handleIndex = this.handleIndex.bind(this);
    this.handleHotel = this.handleHotel.bind(this);
    this.handleDining = this.handleDining.bind(this);
    this.handleActivities = this.handleActivities.bind(this);
    this.handleGallery = this.handleGallery.bind(this);
    this.handleTestimonials = this.handleTestimonials.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }

  handleIndex() {
    this.setState({
      pageImage: "index"
    });
  }

  handleHotel() {
    this.setState({
      pageImage: "hotel"
    });
  }

  handleDining() {
    this.setState({
      pageImage: "dining"
    });
  }

  handleActivities() {
    this.setState({
      pageImage: "activities"
    });
  }

  handleGallery() {
    this.setState({
      pageImage: "gallery"
    });
  }

  handleTestimonials() {
    this.setState({
      pageImage: "testimonials"
    });
  }

  handleContact() {
    this.setState({
      pageImage: "contact"
    });
  }

  render() {
    if (this.state.pageImage === "index") {
      return (
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="home-cover" src={require("../../images/Chantli_Front_View.jpg")} alt="Hotel-Front-View" />
          </div>
        </div>
      );
    } else if (this.state.pageImage === "hotel") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
         <div className="crop">
            <img className="hotel-cover" src={require("../../images/Stay_with_us.jpg")} alt="Hotel-View" />
          </div>
        </div>
      );
    } else if (this.state.pageImage === "dining") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="dining-cover" src={require("../../images/Every_day_a_Feast.jpg")} alt="Tables-set-for-dinner" />
          </div>
        </div>
      );
    } else if (this.state.pageImage === "activities") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="activities-cover" src={require("../../images/activities.jpg")} alt="Sea-and-boat" />
          </div>
        </div>
      );
    } else if (this.state.pageImage === "gallery") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="gallery-cover" src={require("../../images/Palmar.jpg")} alt="Palm-trees" />
          </div>
        </div>
      );
    } else if (this.state.pageImage === "testimonials") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="testimonials-cover" src={require("../../images/Boutique.jpg")} alt="Palm-trees" />
          </div>
        </div>
      );
    } else if (this.state.pageImage === "contact") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="contact-cover" src={require("../../images/Flowers.jpg")} alt="Palm-trees" />
          </div>
        </div>
    );
  }
}
}

export default CoverImage;
