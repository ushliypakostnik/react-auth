import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { credentialsType } from '../store/types';

import { authLogout } from '../store/actions';

import styled from 'styled-components';
import {
  Page,
  CenterFormWrapper,
  Form,
  Button,
  TextNormal,
} from '../theme/widgets';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  authLogout: () => void;
}

interface State {

}

class Account extends React.Component<Props, State> {

  public render() {

    return (
      <Page>
        <CenterFormWrapper>
          <ButtonWrapper>
            <Button
              type="button"
              role="button"
              aria-label='Logout button'
              onClick={(e) => {
                e.preventDefault();
                this.props.authLogout();
            }}>Sign out</Button>
            <Button
              type="button"
              role="button"
              aria-label='Logout button'
              onClick={(e) => {
                e.preventDefault();
            }}>Resend Verify Email</Button>
           </ButtonWrapper>
        </CenterFormWrapper>
      </Page>
    );
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : Props => ({
  authLogout: () => dispatch(authLogout()),
});

export default connect(null, mapDispatchToProps)(Account);
