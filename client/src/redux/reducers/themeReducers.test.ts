import actionTypes from '../actions/actionTypes';
import themeReducer from './themeReducers';

describe('Given a themesReducer', () => {
  test('return a LOAD_THEMES', () => {
    const themes = {
      project: 'morena',
      title: 'morena',
      icon: 'morena',
      creator: {
        user: 'morena',
        date: 'morena',
      },
    };
    const action: any = { type: actionTypes.LOAD_THEMES, themes };
    const results = themeReducer(themes, action);
    expect(results).toEqual(themes);
  });
});
