import actionTypes from '../actions/actionTypes';
import projectReducer from './projectReducer';

describe('Given a projectReducer', () => {
  test('return a LOAD_PROJECTS', () => {
    const projects = {
      _id: 'morena',
      title: 'morena',
      icon: 'morena',
      creator: {
        user: 'morena',
        date: 'morena',
      },
      crew: [{
        user: 'morena',
        mail: 'morena',
        img: 'morena',
      }],
    };
    const action: any = { type: actionTypes.LOAD_LESSONS, projects };
    const results = projectReducer(projects, action);
    expect(results).toEqual(projects);
  });
  test('return a DELETE_PROJECT', () => {
    const projects = [{
      _id: 'morena',
      title: 'morena',
      icon: 'morena',
      creator: {
        user: 'morena',
        date: 'morena',
      },
      crew: [{
        user: 'morena',
        mail: 'morena',
        img: 'morena',
      }],
    }];
    const action: any = { type: actionTypes.DELETE_PROJECT, projects };
    const results = projectReducer(projects, action);
    expect(results).toEqual(projects);
  });
  test('return a ADD_PROJECT', () => {
    const projects = [{
      _id: 'morena',
      title: 'morena',
      icon: 'morena',
      creator: {
        user: 'morena',
        date: 'morena',
      },
      crew: [{
        user: 'morena',
        mail: 'morena',
        img: 'morena',
      }],
    }];
    const action: any = { type: actionTypes.ADD_PROJECT, projects };
    const results = projectReducer(projects, action);
    expect(results).toEqual(projects);
  });
});
