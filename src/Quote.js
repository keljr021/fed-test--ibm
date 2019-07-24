import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Quote extends Component {

    render() {

        const { quote } = this.props;

        return (
            <div className='quote'>
                <div className='quote-text'>
                    {quote.text}
                </div>
                <div className='quote-author'>
                    - {quote.author}
                </div>

            </div>
        );
    }
}

export default Quote;

