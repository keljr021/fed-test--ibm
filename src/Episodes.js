import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EpisodeSeason from './EpisodeSeason';
import './App.css';

class Episodes extends Component {

    render() {

        const { episodes } = this.props;

        return (
            <div className="episodes mdl-grid">
                <div className="episodes-title mdl-cell mdl-cell--12-col-desktop">
                    <h4>Episodes</h4>
                </div>

                <div className="episodes-list mdl-cell mdl-cell--12-col-desktop mdl-grid">
                    <EpisodeSeason season={1} episodes={episodes} />
                </div>

            </div>
        );
    }
}

export default Episodes;

