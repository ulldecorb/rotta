import React from 'react';
import ThemesDetail from './index';
import { render } from '../../utils/testUtils';

describe('Given a ThemesDetail component', () => {
  test('Should render html element', () => {
    const { container } = render(<ThemesDetail />);
    const chooseTag = container.querySelector('h2');
    expect(chooseTag?.textContent).toBe(undefined);
  });
});
