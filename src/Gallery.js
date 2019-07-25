import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import './App.css';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.loadImgArray = this.loadImgArray.bind(this);
    }    

    loadImgArray() {
        const { gallery } = this.props;
        let outputArray = [];

        if (typeof gallery != 'undefined') {
            for (let i = 0; i < gallery.length; i++) {
                let image = gallery[i];

                let imgObj = {
                    original: image.src,
                    description: image.text + (typeof image.reference !== 'undefined' ? `\r\n(Courtesy of ${image.reference})` : null)
                };

                outputArray.push(imgObj)
            }
        }

        return outputArray;
    }

    render() {

        let imgArray = this.loadImgArray();

        return (
            <div id={"gallery"} className='gallery mdl-grid'>
                <div className='gallery-title mdl-cell mdl-cell--12-col-desktop'>
                    <h3>Gallery</h3>
                </div>

                <ImageGallery items={imgArray} lazyLoad={true} showBullets={true} showThumbnails={false}/>

            </div>
        );
    }
}

export default Gallery;

