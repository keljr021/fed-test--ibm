import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Head extends Component {

    render() {

        return (
            <div className="head">
                <div className="head-title">
                    Couch Potato
                </div>
                <div className="head-language">
                    <select>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
                
            </div>
        );
    }
}

export default Head;

