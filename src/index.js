import React from 'react';
import ReactDOM from 'react-dom';

// ROUTER
import { ConnectedRouter } from 'connected-react-router';

// REDUX
import { Provider } from 'react-redux';
import configureStore, { history } from './store';

// App
import App from './pages/App';

// CSS
import 'sanitize.css/sanitize.css';
import 'index.css';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/App', () => {
    render(App);
  });
}
