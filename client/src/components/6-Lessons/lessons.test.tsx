import React from 'react';
import LessonsCard from './index';
import { render } from '../../utils/testUtils';

describe('Given a Lessons component', () => {
  test('Should render text', () => {
    const { container } = render(<LessonsCard />);
    const chooseTag = container.querySelector('div');
    expect(chooseTag?.innerHTML).toBe('');
  });
});
