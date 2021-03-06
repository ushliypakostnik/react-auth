import * as React from 'react';

import {
  Route,
  Redirect,
  Switch,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";

import { connect } from 'react-redux';
import { StoreType } from '../store/types';

import Login from './auth/Login';
import Password from './auth/Password';
import Verify from './auth/Verify';
import Social from './auth/Social';
import Account from './account/Account';
import Page404 from '../components/pages/Page404';

const PrivateRoute : React.SFC<RouteProps & any> =
  ({ component: Component, auth, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props : RouteComponentProps<any>) => auth
          ? <Component {...props} isAuth={ auth } />
          : <Redirect to='/' />}
      />
    );
};

const LoginRoute : React.SFC<RouteProps & any> =
  ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props : RouteComponentProps<any>) => auth
        ? <Redirect to='/account' />
        : <Component {...props} />}
    />
  );
};

interface Props {
  isAuth : boolean;
};

const initialState = {
  isAuth: false,
};

type State = Readonly<typeof initialState>;

class App extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    isAuth: nextProps.isAuth,
  });

  readonly state : State = initialState;

  public render() {
    const { isAuth } = this.state;

    return (
      <Switch>
        <LoginRoute exact path="/" auth={ isAuth } component={ Login } />
        <PrivateRoute path="/account" auth={ isAuth } component={ Account } />
        <Route path="/social" component={ Social } />
        <Route path="/verify" component={ Verify } />
        <Route path="/password" component={ Password } />
        <Route component={ Page404 } />
      </Switch>
    );
  }
};

const mapStateToProps = (state : StoreType) : State => ({
  isAuth: state.rootReducer.auth.isAuth,
});

export default connect(mapStateToProps, null)(App);
