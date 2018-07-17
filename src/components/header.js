import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <header id="masthead" className="site-header">
                <div className="site-branding">
                    <img className="site-logo" alt="Eruma logo" src={`../images/logo_small.png`}/>
                </div>
            </header>
        );
    }
}

export default Header;