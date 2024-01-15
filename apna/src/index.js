import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-b81ooqpawvrk8kua.us.auth0.com"
    clientId="LEeQjGKBxL1Voc1CCurwUbV1tC78evqe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>

);

