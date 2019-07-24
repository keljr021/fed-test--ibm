import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Quote extends Component {

    render() {

        return (
            <div className="quote">
                <div className="quote-text">
                    {this.props.quote.text}
                </div>
                <div className="quote-author">
                    - {this.props.quote.author}
                </div>

            </div>
        );
    }
}

export default Quote;

