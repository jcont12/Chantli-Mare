import React, { Component } from 'react';
import './App.css';
import Header from './components/headerComponents/header'
import CoverImage from './components/headerComponents/coverImage'
import Home from './components/pages/home'
import Hotel from './components/pages/hotel'
import Dining from './components/pages/dining'
import Activities from './components/pages/activities'
import Gallery from './components/pages/gallery'
import Testimonials from './components/pages/testimonials'
import Contacts from './components/pages/contacts'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentPage: 'index'
    }
  }
  render () {
    if (this.state.currentPage === 'index') {
      return (
        <Router>
        <div className='App'>
          <CoverImage />
          <Route exact path='/' component={Home} />
          <Route exact path='/Hotel' component={Hotel} />
          <Route exact path='/Dining' component={Dining} />
          <Route exact path='/Activities' component={Activities} />
          <Route exact path='/Gallery' component={Gallery} />
          <Route exact path='/Testimonials' component={Testimonials} />
          <Route exact path='/Contacts' component={Contacts} />
          </div>
        </Router>
      )
    }
  }
}

export default App
