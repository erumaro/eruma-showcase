import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectsIndex from './components/projects_index';
import ProjectsSingle from './components/projects_single';
import Technology from './components/technology';
import TechnologyIndex from './components/technology_index';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ProjectsIndex} />
        <Route path="projects/:id" component={ProjectsSingle} />
        <Route path="technology" component={Technology} />
        <Route path="technology/:id" component={TechnologyIndex} />
    </Route>
);