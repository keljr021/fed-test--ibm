import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Inspiration extends Component {

    render() {

        const { video, logo, description, snippets } = this.props;

        return (
            <div className='inspiration mdl-grid'>
                <div className='inspiration-title mdl-cell mdl-cell--12-col-desktop'>
                    <h4>Inspiration</h4>
                </div>
                <div className='inspiration-logo mdl-cell mdl-cell--6-col-desktop'>
                    <img alt='#' src={logo} />
                </div>
                <div className='inspiration-head mdl-cell mdl-cell--6-col-desktop'>
                    <p>{description}</p>
                </div>                
                <div className='inspiration-body mdl-cell mdl-cell--6-col-desktop'>
                    {snippets.map((snippet, key) => 
                        <p key={key}>{snippet}</p>
                    )}
                </div>
                <div className='inspiration-video mdl-cell mdl-cell--6-col-desktop'>
                    <video width={'400'} controls={true}>
                        <source src={video} type={'video/mp4'} />
                        Your browser does not support HTML5 video.
                    </video>
                </div>                
            </div>
        );
    }
}

export default Inspiration;

