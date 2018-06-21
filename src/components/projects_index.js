import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/index';
import { Link } from 'react-router';

class ProjectsIndex extends Component {
    componentWillMount() {
        this.props.fetchProjects();
    }
    
    renderProjects() {
        return this.props.projects.map((project) => {
           return (
               <article key={project.id} className="project">
                   <div className="featured-image-wrapper">
                       <img className="featured-image" src={project._embedded["wp:featuredmedia"][0].source_url}/>
                   </div>
                   <div className="project-content">
                       <h2>{project.title.rendered}</h2>
                       <ul className="technology-links">
                       {
                           project._embedded["wp:term"][1].map((technology) => {
                               return (
                                   <li key={technology.id}><Link to={'technology/' + technology.id}>{technology.name}</Link></li>
                               );
                           })
                        }
                        </ul>
                       <div className='project-excerpt' dangerouslySetInnerHTML={ { __html: project.excerpt.rendered } }></div>
                       <Link to={'projects/' + project.id} type="button">Read more</Link>
                   </div>
               </article>
           );
        });
    }
    
    render() {
        if(!this.props.fetchProjects()){
            return(
            <div id="primary" className="content-area"><img src="../../images/Spin-1s-200px.gif"/></div>
            );
        }
        return(
            <div id="primary" className="content-area">
                <h1>Projects</h1>
                {this.renderProjects()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { 
        projects: state.projects.all
    };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectsIndex);