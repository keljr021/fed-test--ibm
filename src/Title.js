import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Title extends Component {

    render() {

        return (
            <div className='title'>
                <h3>{this.props.heading}</h3>
            </div>
        );
    }
}

export default Title;

