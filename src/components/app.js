import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div id="content" className="site-content">
          {this.props.children}
      </div>
    );
  }
}