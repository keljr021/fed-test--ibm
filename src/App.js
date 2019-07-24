import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Head from './Head';
import Navbar from './Navbar';
import Title from './Title';
import Inspiration from './Inspiration';
import Gallery from './Gallery';
import Episodes from './Episodes';
import Quote from './Quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      languages: ['A','B','C']
    }
  }  

  componentDidMount() {
    this.fetchData(`en_US`);
  }

  fetchData(language) {
    axios.get(`./data/${language}.json`)
         .then(function(res) {
          console.log(res);

          this.setState(res.data);
        });
  }

  changeLanguage(language) {
    this.fetchData(language);
  }

  render() {

    const { languages, heading, quote, description, snippets, video, logo, gallery, episodes } = this.state;

    return (
      <div className='App'>
        <Head languages={languages} changeLanguage={this.changeLanguage}/>

        <div className='contentbox'>
          <Navbar />
          <Title heading={heading} />
          <Quote quote={{'text':'', 'author':''}} />
          <Inspiration description={description} snippets={snippets} video={video} logo={logo} />
          <Gallery gallery={gallery} />
          <Episodes episodes={episodes} />
        </div>
      </div>
    );
  }
}

export default App;
