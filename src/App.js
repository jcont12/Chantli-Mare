import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import CoverImage from './components/cover_image'

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
