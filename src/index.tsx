import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle } from "./theme/theme";

import App from './containers/App';

import * as serviceWorker from './serviceWorker';

import store, { history } from './store/store';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
