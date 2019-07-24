import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Gallery extends Component {

    render() {

        return (
            <div className="gallery mdl-grid">
                <div className="gallery-title mdl-cell mdl-cell--12-col-desktop">
                    <h4>Gallery</h4>
                </div>
                <div className="gallery-text mdl-cell mdl-cell--6-col-desktop">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet luctus est nec vehicula. Sed id tellus hendrerit, condimentum dolor quis, feugiat ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut suscipit eros ipsum, vel suscipit metus laoreet vitae. Pellentesque sodales faucibus ultrices. Donec auctor varius purus. Aenean pellentesque non lacus quis fermentum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet luctus est nec vehicula. Sed id tellus hendrerit, condimentum dolor quis, feugiat ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut suscipit eros ipsum, vel suscipit metus laoreet vitae. Pellentesque sodales faucibus ultrices. Donec auctor varius purus. Aenean pellentesque non lacus quis fermentum.</p>
                </div>
                <div className="gallery-images mdl-cell mdl-cell--6-col-desktop">
                    <img alt="#" src="./images/stranger-things_raw.png" />
                </div>                     
            </div>
        );
    }
}

export default Gallery;

