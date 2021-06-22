import actionTypes from '../actions/actionTypes';
import Themes from '../../types/themes.model';

function themeReducer(themes = [], action: {type: string, themes:Themes}) {
  switch (action.type) {
    case actionTypes.LOAD_THEMES:
      return action.themes;

    default:
      return themes;
  }
}

export default themeReducer;
