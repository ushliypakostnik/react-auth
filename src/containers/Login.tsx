import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { MESSAGES } from '../store/constants';

import {
  StoreType,
  CredentialsType
} from '../store/types';

import {
  postAuth,
  postRemindPassword,
  clearMessages,
} from '../store/modules/auth/actions';

import CenterMessage from '../components/CenterMessage';

import {
  Page,
  CenterWrapper,
  Form,
  FormGroup,
  FormMessage,
  TextSmall,
  TextLarge,
  Input,
  Button,
  A,
} from '../theme/widgets';

interface DispatchProps {
  postAuth : (credentials: CredentialsType) => void;
  postRemindPassword : (usermail: string) => void;
  clearMessages: () => void;
};

interface StateToProps {
  success : string;
  error : string;
};

interface Props extends DispatchProps, StateToProps {};

const initialState = {
  login: true,
  mailError: '',
  passError: '',
  success: '',
  error : '',
};

type State = Readonly<typeof initialState>;

class Login extends React.Component<Props, State> {
  private usermailInput: React.RefObject<HTMLInputElement>;
  private passwordInput: React.RefObject<HTMLInputElement>;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    success: nextProps.success,
    error: nextProps.error,
  });

  constructor(props) {
    super(props);

    this.usermailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  readonly state : State = initialState;

  private submit = (usermail : string, password : string) : void => {
    const emailValid = this.validateEmail(usermail);
    if (this.state.login) {
      const passwordValid = this.validatePassword(password);
      if (emailValid && passwordValid) {
        const user = {
          usermail,
          password,
        }
        this.props.postAuth(user);
      }
    } else {
      if (emailValid) {
        this.props.postRemindPassword(usermail);
      }
    }
  };

  private validateEmail = (email : string) : boolean => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = regExp.test(email);
    let mailError;
    if (email === '') {
      mailError = MESSAGES.is_required;
    } else if (validate) {
      mailError = '';
    } else {
      mailError = MESSAGES.email_invalid;
    }
    this.setState({
      mailError: mailError,
    });
    return validate;
  };

  private validatePassword = (password : string) : boolean => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;
    const validate = regExp.test(password);
    const minLenght = 6;
    let passError;
    if (password === '') {
      passError = MESSAGES.is_required;
    } else if (password.length < minLenght) {
      passError = MESSAGES.password_min_lenght;
    } else if (!validate) {
      passError = MESSAGES.password_contain_digit;
    } else {
      passError = '';
    }
    this.setState({
      passError: passError,
    });
    return validate;
  }

  public render() {
    const { login, mailError, passError, success, error } = this.state;

    return (
      <Page outer>
        <CenterWrapper>
          <CenterMessage>
            <TextLarge>Create React App based<br />frontend boilerplate</TextLarge>
          </CenterMessage>
          <Form>
            <FormGroup>
              <Input
                type="email"
                aria-label="email input"
                placeholder="Email"
                ref={this.usermailInput}
              />
              {mailError !== ''
                && <FormMessage error>
                     <TextSmall>{ mailError }</TextSmall>
                   </FormMessage>}
              {!login && success !== ''
                && <FormMessage success>
                     <TextSmall>{ success }</TextSmall>
                  </FormMessage>}
              {error !== ''
                && <FormMessage error>
                     <TextSmall>{ error }</TextSmall>
                  </FormMessage>}
            </FormGroup>
            {login &&
              <FormGroup>
                <Input
                  type="password"
                  aria-label="password input"
                  placeholder="Password"
                  ref={this.passwordInput}
                 />
                 {passError !== ''
                   && <FormMessage error>
                         <TextSmall>{ passError }</TextSmall>
                      </FormMessage>}
              </FormGroup>
            }
            <Button
              type="submit"
              role="button"
              aria-label={login ? 'Login' : 'Remind'}
              onClick={(e) => {
                e.preventDefault();
                if (success !== '' || error !== '') this.props.clearMessages();
                if (login) {
                  this.submit(this.usermailInput.current.value, this.passwordInput.current.value);
                } else {
                  this.submit(this.usermailInput.current.value, null);
                }
            }}>{login ? 'Login' : 'Remind'}</Button>
            <A
              href="#"
              rel="noopener noreferrer"
              aria-label={login ? 'Remind password' : 'Back to login'}
              onClick={(e) => {
                e.preventDefault();
                success !== '' && this.props.clearMessages();
                this.setState({
                  login: !login,
                });
              }}
            >{login ? 'Remind password?' : 'Back to login'}</A>
          </Form>
        </CenterWrapper>
       </Page>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  success: state.rootReducer.auth.success,
  error: state.rootReducer.auth.error,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  postAuth: (credentials: CredentialsType) => dispatch(postAuth(credentials)),
  postRemindPassword: (usermail: string) => dispatch(postRemindPassword(usermail)),
  clearMessages: () => dispatch(clearMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
