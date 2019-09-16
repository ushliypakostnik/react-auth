import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { MESSAGES } from '../../store/constants';

import i18n from '../../utils/i18n';
import { WithTranslation, withTranslation } from 'react-i18next';


import {
  StoreType,
  CredentialsType
} from '../../store/types';

import {
  postAuth,
  getFacebookAuth,
  getVkontakteAuth,
  postRemindPassword,
  clearMessages,
} from '../../store/modules/auth/actions';

import Empty from '../../components/pages/Empty';
import CenterMessage from '../../components/elements/CenterMessage';
import LangSwitch from '../utils/LangSwitch';

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
} from '../../theme/widgets';

interface DispatchProps {
  postAuth : (credentials: CredentialsType) => void;
  getFacebookAuth : () => void;
  getVkontakteAuth : () => void;
  postRemindPassword : (usermail: string) => void;
  clearMessages: () => void;
};

interface StateToProps {
  isFetching: boolean;
  success : string;
  error : string;
};

interface Props extends DispatchProps, StateToProps, WithTranslation {};

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
    isFetching: nextProps.isFetching,
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
      mailError = i18n.t('is_required');
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
    const { i18n, isFetching } = this.props;
    const { login, mailError, passError, success, error } = this.state;

    return (
      <React.Fragment>
        { isFetching && login ?
          <Empty outer /> :
          <Page outer>
            <CenterWrapper>
              <CenterMessage>
                <TextLarge>{i18n.t('maintitle')}</TextLarge>
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
                    && <FormMessage state="error">
                         <TextSmall>{ mailError }</TextSmall>
                       </FormMessage>}
                  {!login && success !== ''
                    && <FormMessage state="success">
                         <TextSmall>{ success }</TextSmall>
                      </FormMessage>}
                  {error !== ''
                    && <FormMessage state="error">
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
                       && <FormMessage state="error">
                             <TextSmall>{ passError }</TextSmall>
                          </FormMessage>}
                  </FormGroup>}
                <Button
                  type="submit"
                  aria-label={login ? 'Login or registration' : 'Remind password'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (success !== '' || error !== '') this.props.clearMessages();
                    if (login) {
                      this.submit(this.usermailInput.current.value, this.passwordInput.current.value);
                    } else {
                      this.submit(this.usermailInput.current.value, null);
                    }
                }}>{login ? 'Login / Registration' : 'Remind password'}</Button>
                {login &&
                  <React.Fragment>
                   <Button
                      type="button"
                      brand="facebook"
                      aria-label="login via Facebook"
                      onClick={(e) => {
                        e.preventDefault();
                        if (success !== '' || error !== '') this.props.clearMessages();
                        this.props.getFacebookAuth();
                      }}>Via Facebook</Button>
                   <Button
                      type="button"
                      brand="vkontakte"
                      aria-label="login via VKontakte"
                      onClick={(e) => {
                        e.preventDefault();
                        if (success !== '' || error !== '') this.props.clearMessages();
                        this.props.getVkontakteAuth();
                      }}>Via Vkontakte</Button>
                  </React.Fragment>}
                <A
                  href="#"
                  rel="noopener noreferrer"
                  aria-label={login ? 'Remind password' : 'Back to login'}
                  onClick={(e) => {
                    e.preventDefault();
                    if (success !== '' || error !== '') this.props.clearMessages();
                    this.setState({
                      login: !login,
                    });
                  }}
                >{login ? 'Remind password?' : 'Back to login'}</A>
              </Form>
              <LangSwitch />
            </CenterWrapper>
           </Page>}
       </React.Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  isFetching: state.rootReducer.auth.isFetching,
  success: state.rootReducer.auth.success,
  error: state.rootReducer.auth.error,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  postAuth: (credentials : CredentialsType) => dispatch(postAuth(credentials)),
  getFacebookAuth: () => dispatch(getFacebookAuth()),
  getVkontakteAuth: () => dispatch(getVkontakteAuth()),
  postRemindPassword: (usermail : string) => dispatch(postRemindPassword(usermail)),
  clearMessages: () => dispatch(clearMessages()),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Login));