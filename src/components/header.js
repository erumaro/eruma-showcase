import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <header id="masthead" className="site-header">
                <div className="site-branding">
                    
                </div>
                <nav id="site-navigation" className="main-navigation">
                    <ul id="primary-menu">
                        <li>Section 1</li>
                        <li>Section 2</li>
                        <li>Section 3</li>
                        <li>Section 4</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;