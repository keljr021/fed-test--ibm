import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './App.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 'inspiration'
        };

        this.setActiveLink = this.setActiveLink.bind(this);
    }  

    setActiveLink(link) {
        this.setState({
            activeLink: link
        });
    }

    render() {

        const { activeLink } = this.state;

        return (
            <div className='navbar'>
                <div className='navbar-menu'>
                   <AnchorLink className={(activeLink === 'inspiration') ? 'active' : ''} href='#inspiration' onClick={() => this.setActiveLink('inspiration')}>Inspiration</AnchorLink> | 
                   <AnchorLink className={(activeLink === 'gallery') ? 'active' : ''} href='#gallery' onClick={() => this.setActiveLink('gallery')}>Gallery</AnchorLink> | 
                   <AnchorLink className={(activeLink === 'episodes') ? 'active' : ''} href='#episodes' onClick={() => this.setActiveLink('episodes')}>Episodes</AnchorLink>
                </div>
            </div>
        );
    }
}

export default Navbar;

