import actionTypes from '../actions/actionTypes';
import Project from '../../types/projects.model';

function projectReducer(projects = [], action: {
  type: string,
  projects: Project[],
  projectId: string,
  project: Project,
  title: string,
}) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      return action.projects;

    case actionTypes.DELETE_PROJECT:
      return projects.filter((project:Project) => project._id !== action.projectId);

    case actionTypes.ADD_PROJECT:
      return [
        ...projects,
        action.project
      ];

    default:
      return projects;
  }
}

export default projectReducer;
