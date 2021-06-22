import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from './utils/testUtils';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const { container } = render(<App />);
  const chooseTag = container.querySelector('div');
  expect(chooseTag?.textContent).toBe('');
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
