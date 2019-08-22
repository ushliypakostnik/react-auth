import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
  StoreType,
  credentialsType,
} from '../store/types';

import { fetchAuth } from '../store/actions';

import { OuterPage } from '../theme/widgets';

interface Props {
  fetchAuth: (credentials: credentialsType) => void;
}

class Login extends React.Component<Props> {

  public submit = credentials => {
    this.props.fetchAuth(credentials);
  };

  render() {
    return (
      <OuterPage>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Username" />
          <button type="submit" onClick={(e) => {
            e.preventDefault();
            this.submit({username: 'dfsdf', password: 'dfsdfsdf'});
          }}>Login</button>
        </form>
       </OuterPage>
    );
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : Props => ({
  fetchAuth: (credentials: credentialsType) => dispatch(fetchAuth(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
