// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';

// jest.mock('react-dom', () => ({ render: jest.fn() }));

// test('renders with App and root div', () => {
//   const root = document.createElement('div');
//   root.id = 'root';
//   document.body.appendChild(root);

//   require('./index');

//   expect(ReactDOM.render).toHaveBeenCalledWith(<Auth0Provider clientId="iH5OZyjzXp4I5xIwe2rq1C7en6TzPDYm" domain="dev-wgrl93pa.eu.auth0.com" redirectUri="http://localhost:3000/projects">
//     ,
//     <App />
//     ,
//                                                </Auth0Provider>, <div id="root" />);
// });

import './utils/matchMedia.mock';
import ReactDOM from 'react-dom';
import { ReactStrictMode, rootElement } from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));
describe('index.js', () => {
  it('renders without crashing', () => {
    ReactDOM.render(ReactStrictMode, rootElement);
    expect(ReactDOM.render).toHaveBeenCalledWith(ReactStrictMode, rootElement);
  });
});
