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
      logo: 'stranger-things_raw.png'
    };
  }  

  componentDidMount() {
    this.fetchData(`en_US`);
  }

  fetchData(language) {
    let self = this;
    axios.get(`./data/${language}.json`)
         .then(function(res) {
          console.log(res);

          //Since the JSON properties were dashed, added videoEmbed and episodeList manually
          self.setState({
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

    const { languages, heading, quote, description, snippets, logo, videoEmbed, gallery, episodeList } = this.state;

    return (
      <div className='App'>
        <Head languages={languages} changeLanguage={this.changeLanguage}/>

        <div className='contentbox'>
          <Navbar />
          <Title heading={heading} />
          <Inspiration description={description} snippets={snippets} videoEmbed={videoEmbed} logo={logo} />
          <Quote quote={quote} />
          <Gallery gallery={gallery} />
          <Episodes episodes={episodeList} />
        </div>
      </div>
    );
  }
}

export default App;
