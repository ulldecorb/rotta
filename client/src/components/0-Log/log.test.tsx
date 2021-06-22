import React from 'react';
import Landing from './index';
import { render } from '../../utils/testUtils';

describe('Given a Landing component', () => {
  test('Should render text', () => {
    const { container } = render(<Landing />);
    const chooseTag = container.querySelector('div');
    expect(chooseTag?.textContent).toBe('Loading ...');
  });
});
