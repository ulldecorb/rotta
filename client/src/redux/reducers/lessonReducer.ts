import actionTypes from '../actions/actionTypes';
import Lessons from '../../types/lessons.model';

function lessonReducer(lessons = [], action: {type: String, lessons:Lessons}) {
  switch (action.type) {
    case actionTypes.LOAD_LESSONS:
      return action.lessons;

    default:
      return lessons;
  }
}

export default lessonReducer;
