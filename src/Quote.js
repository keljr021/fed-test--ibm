import React, { Component } from 'react';
import './App.css';

class Quote extends Component {

    render() {

        const { quote } = this.props;

        return (
            <div className='quote'>
                <div className='quote-text'>
                    {(quote) ? `"${quote.text}"` : null}
                </div>
                <div className='quote-author'>
                    - {(quote) ? quote.author : null}
                </div>

            </div>
        );
    }
}

export default Quote;

