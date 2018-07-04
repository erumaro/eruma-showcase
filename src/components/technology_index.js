import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchProjectsTechnology, fetchTechnology } from '../actions/index';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

class TechnologyIndex extends Component {
    componentWillMount() {
        this.props.fetchProjectsTechnology(this.props.params.id);
        this.props.fetchTechnology(this.props.params.id);
    }
    
    renderTechnology() {
        return this.props.technology[0].map((tech) => {
            return (
               <article key={tech.id} className="project">
                   <div className="featured-image-wrapper">
                       <img className="featured-image" src={tech._embedded["wp:featuredmedia"][0].source_url}/>
                   </div>
                   <div className="project-content">
                       <h2>{tech.title.rendered}</h2>
                       <div className='project-excerpt' dangerouslySetInnerHTML={ { __html: tech.excerpt.rendered } }></div>
                       <Link to={'projects/' + tech.id} type="button">Read more</Link>
                   </div>
               </article>
            );
        });
    }
    
    render() {
        return (
            <div id="primary" className="content-area">
                <Helmet>
                    <title>Eruma Showcase - Technology: {this.props.technology[1].name}</title>
                </Helmet>
                <h1>Technology: {this.props.technology[1].name}</h1>
                {this.renderTechnology()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        technology: [state.projects.filteredAll, state.technologies.technology]
    };
}

export default connect(mapStateToProps, { fetchProjectsTechnology, fetchTechnology })(TechnologyIndex);