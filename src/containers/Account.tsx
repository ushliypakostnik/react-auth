import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { StoreType } from '../store/types';

import {
  getUser,
  authLogout,
  postVerifyEmail,
} from '../store/actions';

import styled from 'styled-components';
import {
  Page,
  CenterWrapper,
  Button,
  TextLarge,
  TextString,
  FormGroup,
  FormMessage,
} from '../theme/widgets';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${FormGroup} ${Button} {
    width: 100%;
  }
`;

interface Props {
  authLogout : () => void;
  getUser : () => void;
  postVerifyEmail: (usermail: string) => void;
  profile : {
    usermail: string;
    isVerify: boolean;
  };
  success: string;
};

interface State {
  profile: {
    usermail: string;
    isVerify: boolean;
  };
  success: string;
};

class Account extends React.Component<Props, State> {

  public state : State = {
    profile: {
      usermail: '',
      isVerify: false,
    },
    success: '',
  };

  componentDidMount() {
    this.props.getUser();
  }

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    profile: nextProps.profile,
    success: nextProps.success,
  });

  public render() {
    const { profile, success } = this.state;

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
            <FormGroup>
              <Button
                type="button"
                role="button"
                aria-label='Logout button'
                onClick={(e) => {
                  e.preventDefault();
                  this.props.postVerifyEmail(profile.usermail);
              }}>Resend Verify Email</Button>
             {(success !== '') &&  <FormMessage success>{success}</FormMessage>}
            </FormGroup>
           </ButtonWrapper>
        </CenterWrapper>
      </Page>
    );
  }
};

interface DispatchProps {
  authLogout : () => void;
  getUser : () => void;
  postVerifyEmail: (usermail: string) => void;
};

const mapStateToProps = (state : StoreType) : State => ({
  profile: state.rootReducer.user.profile,
  success: state.rootReducer.user.success,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  authLogout: () => dispatch(authLogout()),
  getUser: () => dispatch(getUser()),
  postVerifyEmail: (usermail: string) => dispatch(postVerifyEmail(usermail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
