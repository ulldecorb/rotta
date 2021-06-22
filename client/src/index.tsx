import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="dev-wgrl93pa.eu.auth0.com"
    clientId="iH5OZyjzXp4I5xIwe2rq1C7en6TzPDYm"
    redirectUri="http://localhost:3000/projects"
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
