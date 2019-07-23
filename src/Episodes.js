import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EpisodeSeason from './EpisodeSeason';
import './App.css';

class Episodes extends Component {

    render() {

        return (
            <div>
                [episode section]<br /><br />

                <EpisodeSeason />
                <EpisodeSeason />
                <EpisodeSeason />
            </div>
        );
    }
}

export default Episodes;

