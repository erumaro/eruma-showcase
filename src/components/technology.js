import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';
import { fetchTechnologies } from '../actions/index';

class Technology extends Component {
    componentWillMount() {
        this.props.fetchTechnologies();
    }
    
    renderTechnologies() {
        return this.props.technologies.map((technology) => {
            return (
                <li key={technology.id}><Link to={`technology/${technology.id}`}>{technology.name}</Link></li>
            )
        });
    }
    
    render() {
        return (
            <div id="primary" className="content-area">
                <h1>Technology</h1>
                <ul>{this.renderTechnologies()}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { technologies: state.technologies.techall };
}

export default connect(mapStateToProps, { fetchTechnologies })(Technology);