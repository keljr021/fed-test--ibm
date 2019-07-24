import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class EpisodeSeason extends Component {

    render() {

        return (
            <div className="episode-season mdl-cell mdl-cell--6-col-desktop">
                <h6>Season #</h6>
                <ul>
                    <li>Episode #</li>
                    <li>Episode #</li>
                    <li>Episode #</li>
                </ul>
            </div>
        );
    }
}

export default EpisodeSeason;

