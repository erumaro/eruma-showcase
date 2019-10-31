import React, { Component } from 'react';
import spinnerImage from '../../images/Spin-1s-200px.gif';

class Spinner extends Component {
    render() {
        return(
            <div><img className="spinner" alt="loading content" src={spinnerImage}/></div>
        );
    }
}

export default Spinner;