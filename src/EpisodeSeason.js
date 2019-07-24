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
                    <tbody>
                        {episodes.map((episode, key) =>
                            <tr key={key}>
                                <td>{episode.name}</td>
                                <td>{episode.rating}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EpisodeSeason;

