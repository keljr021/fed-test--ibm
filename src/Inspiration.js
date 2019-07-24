import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Inspiration extends Component {

    render() {

        const { videoEmbed, logo, description, snippets } = this.props;

        return (
            <div className='inspiration mdl-grid'>
                <div className='inspiration-title mdl-cell mdl-cell--12-col-desktop'>
                    <h4>Inspiration</h4>
                </div>
                <div className='inspiration-logo mdl-cell mdl-cell--6-col-desktop'>
                    <img alt='#' src={`./images/${logo}`} />
                </div>
                <div className='inspiration-head mdl-cell mdl-cell--6-col-desktop'>
                    <p>{description}</p>
                </div>                
                <div className='inspiration-body mdl-cell mdl-cell--6-col-desktop'>
                    {(typeof snippets !== 'undefined') ?
                        snippets.map((snippet, key) => 
                            <p key={key}>{snippet}</p>
                        ) : null
                    }
                </div>
                <div className='inspiration-video mdl-cell mdl-cell--6-col-desktop'>
                    <iframe src={videoEmbed} width={640} height={400} frameBorder={0} allowFullScreen={true}></iframe>
                </div>                
            </div>
        );
    }
}

export default Inspiration;

