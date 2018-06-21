import axios from 'axios';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_TECHNOLOGY = 'FETCH_PROJECTS_TECHNOLOGY';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_TECHNOLOGIES = 'FETCH_TECHNOLOGIES';
export const FETCH_TECHNOLOGY = 'FETCH_TECHNOLOGY';

const ROOT_URL = `${wpglobals.restURL}wp/v2`;

export function fetchProjects() {
    const request = axios.get(`${ROOT_URL}/projects?&_embed=true`);
    
    return {
        type: FETCH_PROJECTS,
        payload: request
    };
}

export function fetchProjectsTechnology(id) {
    const request = axios.get(`${ROOT_URL}/projects?technology=${id}&_embed=true`);
    
    return {
        type: FETCH_PROJECTS_TECHNOLOGY,
        payload: request
    };
}

export function fetchProject(id) {
    const request = axios.get(`${ROOT_URL}/projects/${id}?&_embed=true`);
    
    return {
        type: FETCH_PROJECT,
        payload: request
    };
}

export function fetchTechnologies() {
    const request = axios.get(`${ROOT_URL}/technology`);
    
    return {
        type: FETCH_TECHNOLOGIES,
        payload: request
    };
}

export function fetchTechnology(id) {
    const request = axios.get(`${ROOT_URL}/technology/${id}`);
    
    return {
        type: FETCH_TECHNOLOGY,
        payload: request
    };
}