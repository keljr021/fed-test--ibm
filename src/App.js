import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import Navbar from './Navbar';
import Inspiration from './Inspiration';
import Gallery from './Gallery';
import Episodes from './Episodes';
import Quote from './Quote';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Head />

        <div className="contentbox">
          <Navbar />
          <Inspiration />
          <Gallery />
          <Episodes />
          <Quote />
        </div>
      </div>
    );
  }
}

export default App;
