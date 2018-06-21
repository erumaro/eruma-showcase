import { FETCH_TECHNOLOGIES, FETCH_TECHNOLOGY } from '../actions/index';

const INITIAL_STATE = { techall: [], technology: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_TECHNOLOGIES:
            return { ...state, techall: action.payload.data };
        case FETCH_TECHNOLOGY:
            return { ...state, technology: action.payload.data };
        default:
            return state;
    }
}