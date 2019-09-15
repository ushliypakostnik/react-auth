import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { StoreType } from '../../store/types';

import { authLogout } from '../../store/modules/auth/actions';
import {
  getUser,
  postVerifyEmail,
} from '../../store/modules/user/actions';

import Empty from '../../components/pages/Empty';

import {
  Page,
  CenterWrapper,
  Button,
  ButtonWrapper,
  TextLarge,
  TextString,
  FormGroup,
  FormMessage,
} from '../../theme/widgets';

interface DispatchProps {
  authLogout : () => void;
  getUser : () => void;
  postVerifyEmail: (usermail: string) => void;
};

interface Props extends DispatchProps {
  isFetching: boolean;
  profile : {
    usermail: string;
    isVerify: boolean;
  };
  success: string;
};

const initialState = {};

type State = Readonly<typeof initialState>;

class Account extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    isFetching: nextProps.isFetching,
    profile: nextProps.profile,
    success: nextProps.success,
  });

  readonly state : State = initialState;

  public componentDidMount() : void {
    this.props.getUser();
  }

  public render() {
    const { isFetching, profile, success } = this.props;

    return (
      <React.Fragment>
        { isFetching ?
          <Empty /> :
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
                  aria-label='Logout button'
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.authLogout();
                }}>Sign out</Button>
                {!profile.isVerify &&
                  <FormGroup>
                    <Button
                      type="button"
                      aria-label='Logout button'
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.postVerifyEmail(profile.usermail);
                    }}>Resend Verify Email</Button>
                   {success !== ''
                     && <FormMessage state="success">{ success }</FormMessage>}
                  </FormGroup>}
               </ButtonWrapper>
            </CenterWrapper>
          </Page>}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : State => ({
  isFetching: state.rootReducer.user.isFetching,
  profile: state.rootReducer.user.profile,
  success: state.rootReducer.user.success,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  authLogout: () => dispatch(authLogout()),
  getUser: () => dispatch(getUser()),
  postVerifyEmail: (usermail: string) => dispatch(postVerifyEmail(usermail)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
