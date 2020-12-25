import React, { Component } from 'react'
import './App.css';

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

class App extends Component {
  state = {
    page: 'about'
  }

  setPage = (page) => this.setState({ page: page })

  getCurrentPage = () => {
    switch (this.state.page) {
      case 'about':
        return <AboutPage></AboutPage>
      case 'contact':
        return <ContactPage></ContactPage>
      case 'home':
      default:
        return <HomePage></HomePage>
    }
  }

  render() {
    return (
      <div className="App">
        <div id="menu">
          <a href="/home" onClick={() => { this.setPage('home') }}>Home</a>
          <a href="/about" onClick={() => this.setPage('about')}>About</a>
          <a href="/contact" onClick={() => this.setPage('contact')}>Contact</a>
        </div>
        <div id="content">
          {this.getCurrentPage()}
        </div>
      </div>
    );
  }
}

export default App;
