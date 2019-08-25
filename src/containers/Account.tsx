import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { StoreType } from '../store/types';

import { authLogout } from '../store/modules/auth/actions';
import {
  getUser,
  postVerifyEmail,
} from '../store/modules/user/actions';

import {
  Page,
  CenterWrapper,
  Button,
  ButtonWrapper,
  TextLarge,
  TextString,
  FormGroup,
  FormMessage,
} from '../theme/widgets';

interface DispatchProps {
  authLogout : () => void;
  getUser : () => void;
  postVerifyEmail: (usermail: string) => void;
};

interface Props extends DispatchProps {
  profile : {
    usermail: string;
    isVerify: boolean;
  };
  success: string;
};

const initialState = {
  profile: {
    usermail: '',
    isVerify: false,
  },
  success: '',
};

type State = Readonly<typeof initialState>;

class Account extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    profile: nextProps.profile,
    success: nextProps.success,
  });

  readonly state : State = initialState;

  public componentDidMount() : void {
    this.props.getUser();
  }

  public render() {
    const { profile, success } = this.state;

    return (
      <Page>
        <CenterWrapper>
          <TextString top>
            <TextLarge light>Usermail:</TextLarge>
          </TextString>
          <TextString>
            <TextLarge>{ profile.usermail }</TextLarge>
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
            {!profile.isVerify &&
              <FormGroup>
                <Button
                  type="button"
                  role="button"
                  aria-label='Logout button'
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.postVerifyEmail(profile.usermail);
                }}>Resend Verify Email</Button>
               {success !== ''
                 && <FormMessage success>{ success }</FormMessage>}
              </FormGroup>}
           </ButtonWrapper>
        </CenterWrapper>
      </Page>
    );
  }
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
