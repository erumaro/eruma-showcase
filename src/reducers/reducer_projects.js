import { FETCH_PROJECTS, FETCH_PROJECTS_TECHNOLOGY, FETCH_PROJECT } from '../actions/index';

const INITIAL_STATE = { all: [], filteredAll: [], project: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_PROJECT:
            return { ...state, project: action.payload.data };
        case FETCH_PROJECTS_TECHNOLOGY:
            return { ...state, filteredAll: action.payload.data };
        case FETCH_PROJECTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}