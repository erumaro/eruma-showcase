import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects';
import TechnologiesReducer from './reducer_technologies';

const rootReducer = combineReducers({
    projects: ProjectsReducer,
    technologies: TechnologiesReducer
});

export default rootReducer;