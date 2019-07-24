import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Quote extends Component {

    render() {

        return (
            <div className="quote">
                <div className="quote-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="quote-author">
                    - John Doe
                </div>

            </div>
        );
    }
}

export default Quote;

