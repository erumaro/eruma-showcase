import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
                <p>&copy; 2018 Eruma | Visit Wordpress theme for more content <a href="https://eruma.se">eruma.se</a></p>
            </footer>
        );
    }
}

export default Footer;