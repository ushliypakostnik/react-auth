import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { StoreType } from '../store/types';

import {
  getUser,
  authLogout,
} from '../store/actions';

import styled from 'styled-components';
import {
  Page,
  CenterWrapper,
  Button,
  TextLarge,
  TextString,
} from '../theme/widgets';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  authLogout : () => void;
  getUser : () => void;
  profile : {
    usermail: string;
    isVerify: boolean;
  };
};

interface State {
  profile: {
    usermail: string;
    isVerify: boolean;
  };
};

class Account extends React.Component<Props, State> {

  public state : State = {
    profile: {
      usermail: '',
      isVerify: false,
    },
  };

  componentDidMount() {
    this.props.getUser();
  }

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    profile: nextProps.profile,
  });

  public render() {
    const { profile } = this.state;

    return (
      <Page>
        <CenterWrapper>
          <TextString top>
            <TextLarge light>Usermail:</TextLarge>
          </TextString>
          <TextString>
            <TextLarge>{profile.usermail}</TextLarge>
          </TextString>
          <TextString>
            <TextLarge light>IsVerify: </TextLarge>
            <TextLarge>{ profile.isVerify ? 'Yes' : 'No' }</TextLarge>
          </TextString>
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
        </CenterWrapper>
      </Page>
    );
  }
};

interface DispatchProps {
  authLogout : () => void;
  getUser : () => void;
};

const mapStateToProps = (state : StoreType) : State => ({
  profile: state.rootReducer.user.profile,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  authLogout: () => dispatch(authLogout()),
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
