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
      title: 'Title of Movie Here',
      quote: {
        text: 'This is quote text',
        author: 'Jon Doe'
      },
      desc: 'This is a description',
      snippets: [
        'Snippet 1',
        'Snippet 2',
        'Snippet 3'
      ],
      video: 'x',
      logo: 'x',
      gallery: [
        {
          src: "https://nationalpostcom.files.wordpress.com/2017/11/st5.jpg?quality=80&strip=all&w=780&zoom=1",
          reference: "https://nationalpost.com/entertainment/television/inside-the-upside-down-the-life-of-will-byers-continues-to-spiral-in-episode-5-of-stranger-things-2",
          text: "Drawings on the wall between Eno river and Jordan Lake"
        }
      ],
      episodes: [
        {
          season: 2,
          name: "Chapter Nine: The Gate",
          rating: 9.4
        }
      ]

    }
  }  

  componentDidMount() {

  }

  render() {

    const { title, quote, desc, snippets, video, logo, gallery, episodes } = this.state;

    return (
      <div className="App">
        <Head />

        <div className="contentbox">
          <Navbar />
          <Title title={title} />
          <Quote quote={quote} />
          <Inspiration desc={desc} snippets={snippets} video={video} logo={logo} />
          <Gallery gallery={gallery} />
          <Episodes episodes={episodes} />
        </div>
      </div>
    );
  }
}

export default App;
