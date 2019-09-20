import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";

import ThemeWrapper from './containers/wrappers/ThemeWrapper';

import './utils/i18n';

import * as serviceWorker from './serviceWorker';

import store, { history } from './store/store';

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
       <ThemeWrapper />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
