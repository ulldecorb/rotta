import { combineReducers } from 'redux';
import projects from './projectReducer';
import themes from './themeReducers';
import lessons from './lessonReducer';

const rootReducer = combineReducers({
  projects,
  themes,
  lessons
});

export default rootReducer;
