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
      languages: ['A','B','C'],
      logo: 'images/stranger-things_raw.png'
    };
  }  

  componentDidMount() {
    this.fetchData(`en_US`);
  }

  fetchData(language) {
    axios.get(`./data/${language}.json`)
         .then(function(res) {
          console.log(res);

          this.setState({
            videoEmbed: res.data['video-embed'],
            episodeList: res.data['episode-list'],
            ...res.data
          });
        });
  }

  changeLanguage(language) {
    this.fetchData(language);
  }

  render() {

    const { languages, heading, quote, description, snippets, videoEmbed, logo, gallery, episodeList } = this.state;

    return (
      <div className='App'>
        <Head languages={languages} changeLanguage={this.changeLanguage}/>

        <div className='contentbox'>
          <Navbar />
          <Title heading={heading} />
          <Quote quote={quote} />
          <Inspiration description={description} snippets={snippets} videoEmbed={videoEmbed} logo={logo} />
          <Gallery gallery={gallery} />
          <Episodes episodes={episodeList} />
        </div>
      </div>
    );
  }
}

export default App;
