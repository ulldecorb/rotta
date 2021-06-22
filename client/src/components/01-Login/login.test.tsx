import React from 'react';
import LoginButton from './index';
import { render, fireEvent } from '../../utils/testUtils';

describe('Given a Landing component', () => {
  test('Should render text', () => {
    const { container } = render(<LoginButton />);
    const chooseTag = container.querySelector('button');
    expect(chooseTag?.textContent).toBe('Log In');
  });
});
describe('Button is clicked', () => {
  test('loginWithRedirect function in invoked', () => {
    const { container } = render(<LoginButton />);
    const button: null | HTMLButtonElement = container.querySelector('button');
    const loginWithRedirect = jest.fn();
    fireEvent.click(button);
    expect(loginWithRedirect).toHaveBeenCalledTimes(1);
  });
});
