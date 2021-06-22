import axios from 'axios';
import {
  loadProjects,
  addProject,
  deleteProject,
  loadProject,
  loadLessons,
  updateProject,
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadProjects function', () => {
  test('should dispatch LOAD_ERROR', async () => {
    const loadProjectsResponse = loadProjects();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(),
    });
    const dispatch = jest.fn();
    await loadProjectsResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_ERROR',
    });
  });

  test('should dispatch LOAD_PROJECTS', async () => {
    const loadProjectsResponse = loadProjects();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn(),
    });
    const dispatch = jest.fn();
    await loadProjectsResponse(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_ERROR,
    });
  });
});

describe('loadProjects', () => {
  test('should dispatch  a LOAD_PROJECTS', async () => {
    const mockData = 'macrame';
     (axios as unknown as jest.Mock).mockResolvedValue({mockData});
    const dispatch = jest.fn();

    await loadProjects()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_PROJECTS,
      projects: 'macrame',
    });
  });
});

describe('addProject function', () => {
  const mockProjects = {
    id:'60c0eebcbb07df02bed670a5',
title:"copes",
crew:Array,
  };
    
  test('should dispatch ADD_PROJECT', async () => {
    const dispatch = jest.fn();
    (axios as unknown as jest.Mock).mockResolvedValueOnce( {data: {project: 'macrame'}});
    await addProject('mockProjects')(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('deleteProject function', () => {
  test('should return DELETE_PROJECT', async () => {
    const projectId = jest.fn();
    const action =  await deleteProject('hola');
    expect(action).toStrictEqual({
      type: 'DELETE_PROJECT',
      projectId,
    });
  });
});

describe('loadProject function', () => {
  test('should dispatch LOAD_PROJECT', async () => {
    const result = await loadProject('macrame');

    expect(result).toStrictEqual({
      type: actionTypes.LOAD_PROJECT,
      project: data,
    });
  });
});

describe('loadProject function', () => {
  test('should dispatch UPDATE_PROJECT', async () => {
    const result = await updateProject('macrame');

    expect(result).toStrictEqual({
      type: actionTypes.UPDATE_PROJECT,
      project: data,
    });
  });
});

test('should dispatch LOAD_LESSONS', async () => {
  const loadLessonsResponse = loadLessons();
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn(),
  });
  const dispatch = jest.fn();
  await loadLessonsResponse(dispatch);

  expect(dispatch).toHaveBeenCalledWith({
    type: actionTypes.LOAD_ERROR,
  });
});
