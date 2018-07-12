import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <header id="masthead" className="site-header">
                <div className="site-branding">
                    <img className="site-logo" alt="Eruma logo" src={`../images/erumalogo.svg`}/>
                </div>
            </header>
        );
    }
}

export default Header;