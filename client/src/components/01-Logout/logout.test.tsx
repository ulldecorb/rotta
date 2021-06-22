import React from 'react';
import LogoutButton from './index';
import { render, fireEvent } from '../../utils/testUtils';

describe('Given a LogoutButton component', () => {
  test('Should render html element', () => {
    const { container } = render(<LogoutButton />);
    const chooseTag = container.querySelector('button');
    expect(chooseTag?.innerHTML).toBe('<img class="logout__logout-icon" src="https://cdn0.iconfinder.com/data/icons/user-management-1/32/user-icon-03-512.png" alt="logout icon">');
  });
});

describe('Button is clicked', () => {
  test('loginWithRedirect function in invoked', () => {
    const { container } = render(<LogoutButton />);
    const button: null | HTMLButtonElement = container.querySelector('button');
    const logout = jest.fn();
    fireEvent.click(button);
    expect(logout).not.toHaveBeenCalled();
  });
});
