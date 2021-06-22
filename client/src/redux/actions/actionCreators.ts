import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';
import Projects from '../../types/projects.model';

const projectsUrl = 'http://localhost:4545/api/projects/';
const themesUrl = 'http://localhost:4545/api/themes/';
const lessonsUrl = 'http://localhost:4545/api/lessons/';

export function loadProjects() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(projectsUrl);
      dispatch({
        type: actionTypes.LOAD_PROJECTS,
        projects: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR'
      });
    }
  };
}

export function addProject(project: Projects) {
  return async (dispatch : Dispatch) => {
    const { data } = await axios.post(projectsUrl, project);
    dispatch({
      type: actionTypes.ADD_PROJECT,
      project: data
    });
  };
}

export function deleteProject(projectId: string| undefined) {
  return async (dispatch: Dispatch) => {
    await axios.delete(`${projectsUrl}${projectId}`);
    dispatch({
      type: actionTypes.DELETE_PROJECT,
      projectId
    });
  };
}

export function updateProject(project: any) {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.put(`${projectsUrl}/${project.id}`, project);
    dispatch({
      type: actionTypes.UPDATE_PROJECT,
      project: data
    });
  };
}

export function loadProject(project: any) {
  return async (dispatch: Dispatch) => {
    const { data } = await axios(`${projectsUrl}/${project.id}`);
    dispatch({
      type: actionTypes.LOAD_PROJECT,
      project: data
    });
  };
}

export function getProjectById(projectId: string) {
  return async (dispatch: Dispatch) => {
    const { data } = await axios(`${projectsUrl}/${projectId}`);
    dispatch({
      type: actionTypes.LOAD_PROJECT,
      project: data
    });
  };
}

export function loadThemes() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(themesUrl);
      dispatch({
        type: actionTypes.LOAD_THEMES,
        themes: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR'
      });
    }
  };
}

export function loadLessons() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(lessonsUrl);
      dispatch({
        type: actionTypes.LOAD_LESSONS,
        lessons: data
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_ERROR'
      });
    }
  };
}
