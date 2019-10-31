import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions/index';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import Spinner from '../components/spinner.js';

class ProjectsSingle extends Component {
    componentWillMount() {
        this.props.fetchProject(this.props.params.id);
    }
    
    render() {
        const { project } = this.props;
        
        if( !project ) {
            return <div><Spinner/></div>;
        }
        
        return(
            <div id="primary" className="content-area">
                <Helmet>
                    <title>Eruma Showcase - {project.title.rendered}</title>
                    <meta name="description" content={project.excerpt.rendered} />
                    <meta name="og:image" content={project._embedded["wp:featuredmedia"][0].source_url} />
                </Helmet>
                <Link to={'/'} type="button">Return to home</Link>
                <article key={project.id} className="single-project">
                    <header>
                        <h1>{project.title.rendered}</h1>
                    </header>
                    <div className='post-content'>
                        <div className="featured-image-wrapper">
                           <div className='featured-image'><h2>Desktop</h2><img src={project.acf.desktop_image.url} alt={project.acf.desktop_image.alt}/></div>
                        </div>
                        <div className='post-description' dangerouslySetInnerHTML={ { __html: project.acf.project_description } } />
                        <div className='post-image-wrapper'>
                            <div className='post-image tablet-image'><h2>Tablet</h2><img src={project.acf.tablet_image.url} alt={project.acf.tablet_image.alt}/></div>
                            <div className='post-image mobile-image'><h2>Mobile</h2><img src={project.acf.mobile_image.url} alt={project.acf.mobile_image.alt}/></div>
                        </div>
                    </div>
                    <footer></footer>
                </article>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { project: state.projects.project };
}

export default connect(mapStateToProps, { fetchProject })(ProjectsSingle);