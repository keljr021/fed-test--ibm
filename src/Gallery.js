import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Gallery extends Component {

    render() {

        const { gallery } = this.props;

        return (
            <div className='gallery mdl-grid'>
                <div className='gallery-title mdl-cell mdl-cell--12-col-desktop'>
                    <h4>Gallery</h4>
                </div>
                <div className='gallery-text mdl-cell mdl-cell--4-col-desktop'>
                    <p>{(typeof gallery !== 'undefined') ? gallery[0].text : null}</p>
                </div>
                <div className='gallery-images mdl-cell mdl-cell--8-col-desktop'>
                    <img alt='#' src={(typeof gallery !== 'undefined') ? gallery[0].src : null} />
                </div>                     
            </div>
        );
    }
}

export default Gallery;

