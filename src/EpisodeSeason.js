import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class EpisodeSeason extends Component {

    render() {

        const { season, episodes } = this.props;

        return (
            <div className="episode-season mdl-cell mdl-cell--6-col-desktop">
                <h6>Season {season}</h6>

                <table>
                    {episodes.map(episode =>
                        <tr>
                            <td>{episode.name}</td>
                            <td>{episode.rating}</td>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
}

export default EpisodeSeason;

