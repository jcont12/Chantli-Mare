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
            <img className="home-cover" src={require("../../images/FrontView4.jpg")} alt="Hotel-Front-View" />
            <h1 className="cover-title"> Home </h1>
          </div>
        </div>
      );
    } else if (this.state.pageImage === "hotel") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
         <div className="crop">
            <img className="hotel-cover" src={require("../../images/Stay_with_us.jpg")} alt="Hotel-View" />
            <h1 className="cover-title"> Hotel </h1>
          </div>
        </div>
      );
    } else if (this.state.pageImage === "dining") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="dining-cover" src={require("../../images/Feast1.jpg")} alt="Tables-set-for-dinner" />
            <h1 className="cover-title"> Dining </h1>
          </div>
        </div>
      );
    } else if (this.state.pageImage === "activities") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="activities-cover" src={require("../../images/activity.jpg")} alt="Sea-and-boat" />
            <h1 className="cover-title"> Activities </h1>
          </div>
        </div>
      );
    } else if (this.state.pageImage === "gallery") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="gallery-cover" src={require("../../images/Alejandro.jpg")} alt="Palm-trees" />
            <h1 className="cover-title"> Gallery </h1>
          </div>
        </div>
      );
    } else if (this.state.pageImage === "testimonials") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="testimonials-cover" src={require("../../images/Boutique.jpg")} alt="Palm-trees" />
            <h1 className="cover-title"> Testimonials </h1>
          </div>
        </div>
      );
    } else if (this.state.pageImage === "contact") {
      return(
        <div>
          <Header triggerHome={this.handleIndex} triggerHotel={this.handleHotel} triggerDining={this.handleDining} triggerActivities={this.handleActivities} triggerGallery={this.handleGallery} triggerTestimonials={this.handleTestimonials} triggerContact={this.handleContact}/>
          <div className="crop">
            <img className="contact-cover" src={require("../../images/Touch.jpg")} alt="Palm-trees" />
            <h1 className="cover-title"> Contact </h1>
          </div>
        </div>
    );
  }
}
}

export default CoverImage;
