import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EpisodeSeason from './EpisodeSeason';
import './App.css';

class Episodes extends Component {
    constructor(props) {
        super(props);

        this.filterEachSeason = this.filterEachSeason.bind(this);
    }

    filterEachSeason(list) {

        let seasonArray = [];

        for (let i = 0; i < list.length; i++) {
            let episode = list[i];
            let targetSeason = seasonArray.find((season) => season.num === episode.season);

            if (typeof targetSeason !== 'undefined') {
                targetSeason.episodes.push(episode);
            }
            else {
                let newSeason = {
                    num: episode.season,
                    episodes: []
                };

                seasonArray.push(newSeason);
            }
        }

        return seasonArray;
    }

    render() {

        const { episodeList } = this.props;
        let seasonArray = (typeof episodeList != 'undefined') ? this.filterEachSeason(episodeList) : [];

        return (
            <div id={"episodes"} className='episodes mdl-grid'>
                <div className='episodes-title mdl-cell mdl-cell--12-col-desktop'>
                    <h4>Episodes</h4>
                </div>

                <div className='episodes-list mdl-cell mdl-cell--12-col-desktop mdl-grid'>
                    {
                        seasonArray.map((season, key) => 
                            <EpisodeSeason key={key} num={season.num} episodes={season.episodes} />    
                        )
                    }
                </div>

            </div>
        );
    }
}

export default Episodes;

