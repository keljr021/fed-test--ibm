import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Head extends Component {

    render() {
        const { languages } = this.props;

        return (
            <div className="head">
                <div className="head-title">
                    Couch Potato
                </div>
                <div className="head-language">
                    <select>
                        {languages.map((language, key) =>
                            <option value={language} key={key}>{language}</option>
                        )}
                    </select>
                </div>
                
            </div>
        );
    }
}

export default Head;

