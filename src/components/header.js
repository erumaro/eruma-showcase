import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../images/logo_small.png';

class Header extends Component {
    render() {
        return (
            <header id="masthead" className="site-header">
                <div className="site-branding">
                    <img className="site-logo" alt="Eruma logo" src={logo}/>
                </div>
            </header>
        );
    }
}

export default Header;