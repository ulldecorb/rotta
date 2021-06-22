import actionTypes from '../actions/actionTypes';
import lessonReducer from './lessonReducer';

describe('Given a lessonReducer', () => {
  test('return a LOAD_LESSONS', () => {
    const lessons = {
      project: 'macrame',
      theme: 'macrame',
      title: 'macrame',
      icon: 'macrame',
      description: 'macrame',
      creator: {
        user: 'macrame',
        date: 'macrame',
      },
      links: [{
        name: 'macrame',
        url: 'macrame',
        creator: {
          user: 'macrame',
          date: 'macrame',
        },
      }],
    };
    const action: any = { type: actionTypes.LOAD_LESSONS, lessons };
    const results = lessonReducer(lessons, action);
    expect(results).toEqual(lessons);
  });
});
