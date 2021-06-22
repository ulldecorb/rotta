import React from 'react';
import Header from './index';
import { render } from '../../utils/testUtils';

describe('Given a Header component', () => {
  test('Should render html element', () => {
    const { container } = render(<Header />);
    const chooseTag = container.querySelector('Link');
    expect(chooseTag?.innerHTML).toBe(undefined);
  });
});
