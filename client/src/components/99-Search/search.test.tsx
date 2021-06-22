import React from 'react';
import Search from './index';
import { render } from '../../utils/testUtils';

describe('Given a Search component', () => {
  test('Should render html element', () => {
    const { container } = render(<Search />);
    const chooseTag = container.querySelector('div');
    expect(chooseTag?.innerHTML).toBe('<a class=\"search__background\" href=\"/dashboard\"></a><input type=\"text\" placeholder=\"Search\" class=\"search__input\"><div class=\"search__results\"></div>');
  });
});
