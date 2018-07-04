import React, { Component } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default class App extends Component {
  render() {
    return (
      <div id="page" className="site">
        <Header />
        <div id="content" className="site-content">
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}