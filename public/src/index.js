'user strict';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';
import App from './App';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Router>
        <NextApp />
      </Router>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}
