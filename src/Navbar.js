import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class Navbar extends Component {

    render() {

        return (
            <div className='navbar'>
                <div className='navbar-menu'>
                   <a className='active' href='#inspiration'>Inspiration</a> | 
                   <a className='' href='#gallery'>Gallery</a> | 
                   <a className='' href='#episodes'>Episodes</a>
                </div>
            </div>
        );
    }
}

export default Navbar;

