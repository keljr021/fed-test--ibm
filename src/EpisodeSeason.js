import React, { Component } from 'react';
import './App.css';

class EpisodeSeason extends Component {

    render() {

        const { num, episodes } = this.props;

        return (
            <div className="episode-season mdl-cell mdl-cell--6-col-desktop mdl-cell--8-col-tablet">
                <h6>Season {num}</h6>

                <table width={"100%"}>
                    <tbody>
                        {(typeof episodes !== 'undefined') ? 
                            episodes.map((episode, key) =>
                                <tr key={key} className="episode-season-item">
                                    <td className="episode-season-item-name" width={"60%"}>{episode.name}</td>
                                    <td className="episode-season-item-rating" width={"40%"}>
                                        <i className="material-icons">star</i>
                                        {episode.rating}
                                    </td>
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

