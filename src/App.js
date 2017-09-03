import React, { Component } from 'react';
import './App.css';
import Header from './components/headerComponents/header'
import CoverImage from './components/headerComponents/coverImage'
import Home from './components/pages/home'

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
        <div className='App'>
          <Header />
          <CoverImage />
          </div>
      )
    }
  }
}

export default App
