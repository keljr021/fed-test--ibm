import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class EpisodeSeason extends Component {

    render() {

        const { num, episodes } = this.props;

        return (
            <div className="episode-season mdl-cell mdl-cell--6-col-desktop">
                <h6>Season {num}</h6>

                <table width={"100%"}>
                    <tbody>
                        {(typeof episodes !== 'undefined') ? 
                            episodes.map((episode, key) =>
                                <tr key={key}>
                                    <td width={"75%"}>{episode.name}</td>
                                    <td width={"25%"}>{episode.rating}</td>
                                </tr>
                            ) : null
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EpisodeSeason;

