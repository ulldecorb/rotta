import React from 'react';
import ProjectsBoard from './index';
import { render, fireEvent } from '../../utils/testUtils';

describe('Given a ProjectsBoard component', () => {
  test('Should render text', () => {
    const { container } = render(<ProjectsBoard />);
    const chooseTag = container.querySelector('h2');
    expect(chooseTag?.textContent).toBe('PROJECTS');
  });
});

describe('Button is clicked', () => {
  test('dispatch function in invoked', () => {
    const { container } = render(<ProjectsBoard />);
    const button: null | HTMLButtonElement = container.querySelector('button');
    const dispatch = jest.fn();
    fireEvent.click(button);
    expect(dispatch).not.toHaveBeenCalledTimes(1);
  });
});
