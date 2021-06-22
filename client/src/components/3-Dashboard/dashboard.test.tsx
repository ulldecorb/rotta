import React from 'react';
import Dashboard from './index';
import { render } from '../../utils/testUtils';

describe('Given a Dashboard component', () => {
  test('Should render text', () => {
    const { container } = render(<Dashboard />);
    const chooseTag = container.querySelector('div');
    expect(chooseTag?.textContent).toBe('');
  });
});
