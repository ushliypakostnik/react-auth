import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { credentialsType } from '../store/types';

import {
  postAuth,
  postRemindPassword,
} from '../store/actions';

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

interface Props {
  postAuth : (credentials: credentialsType) => void;
  postRemindPassword : (usermail: string) => void;
}

interface State {
  login : boolean,
  mailError : string;
  passError : string;
}

class Login extends React.Component<Props, State> {
  private usermailInput: React.RefObject<HTMLInputElement>;
  private passwordInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.usermailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  public state : State = {
    login: true,
    mailError: '',
    passError: '',
  };

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
      mailError = 'This field is required!';
    } else if (validate) {
      mailError = '';
    } else {
      mailError = 'Invalid email!';
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
      passError = 'This field is required!';
    } else if (password.length < minLenght) {
      passError = `Password must be at least ${minLenght} characters`;
    } else if (!validate) {
      passError = 'Password must contain at least one digit.';
    } else {
      passError = '';
    }
    this.setState({
      passError: passError,
    });
    return validate;
  }

  render() {
    const { login, mailError, passError } = this.state;

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
              {!(mailError === '')
                && <FormMessage error={!!mailError}>
                     <TextSmall>{mailError}</TextSmall>
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
                 {!(passError === '')
                   && <FormMessage error={!!passError}>
                         <TextSmall>{passError}</TextSmall>
                      </FormMessage>}
              </FormGroup>
            }
            <Button
              type="submit"
              role="button"
              aria-label={login ? 'Login' : 'Remind'}
              onClick={(e) => {
                e.preventDefault();
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

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : Props => ({
  postAuth: (credentials: credentialsType) => dispatch(postAuth(credentials)),
  postRemindPassword: (usermail: string) => dispatch(postRemindPassword(usermail)),
});

export default connect(null, mapDispatchToProps)(Login);
