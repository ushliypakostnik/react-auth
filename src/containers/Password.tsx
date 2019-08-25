import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { history } from '../store/store';

import { MESSAGES } from '../store/constants';

import {
  StoreType,
  NewPasswordType,
} from '../store/types';

import { postNewPassword } from '../store/modules/auth/actions';

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
} from '../theme/widgets';

interface StateToProps {
  hash : string;
};

interface DispatchProps {
  postNewPassword : (credentials: NewPasswordType) => void;
}

interface Props extends StateToProps, DispatchProps {};

const initialState = {
  pass1Error: '',
  pass2Error: '',
  hash: '',
  match: '',
};

type State = Readonly<typeof initialState>;

class Login extends React.Component<Props, State> {
  private password1Input: React.RefObject<HTMLInputElement>;
  private password2Input: React.RefObject<HTMLInputElement>;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    hash: nextProps.hash,
  });

  constructor(props) {
    super(props);

    this.password1Input = React.createRef();
    this.password2Input = React.createRef();
  }

  readonly state : State = initialState;

  private submit = (password1 : string, password2 : string) : void => {
    const password1Valid = this.validatePassword(password1, 1);
    const password2Valid = this.validatePassword(password2, 2);

    if (password1 !== password2) {
      this.setState({
        match: MESSAGES.passwords_do_not_match,
      });
      return;
    } else {
      this.setState({
        match: '',
      });
    }

    if (password1Valid && password2Valid) {
      const query = this.state.hash;
      const id = query.split('&')[0].slice(4);
      const token = query.split('&')[1].slice(6);
      this.props.postNewPassword({ id, password: password1, token });
      history.push('/');
    }
  };

  private validatePassword = (password : string, number: number) : boolean => {
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
    switch (number) {
      case 1:
        this.setState({
          pass1Error: passError,
        });
        break;
      case 2:
        this.setState({
          pass2Error: passError,
        });
        break;
      default:
        break;
    };
    return validate;
  }

  render() {
    const { pass1Error, pass2Error, match } = this.state;

    return (
      <Page outer>
        <CenterWrapper>
          <CenterMessage>
            <TextLarge>Create React App based<br />frontend boilerplate</TextLarge>
          </CenterMessage>
          <Form>
            <FormGroup>
              <Input
                type="password"
                aria-label="password input"
                placeholder="Password"
                ref={this.password1Input}
               />
               {!(pass1Error === '')
                 && <FormMessage error>
                       <TextSmall>{ pass1Error }</TextSmall>
                    </FormMessage>}
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                aria-label="password again input"
                placeholder="Password again"
                ref={this.password2Input}
               />
               {!(pass2Error === '')
                 && <FormMessage error>
                       <TextSmall>{ pass2Error }</TextSmall>
                    </FormMessage>}
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                role="button"
                aria-label="Set password"
                onClick={(e) => {
                  e.preventDefault();
                  this.submit(this.password1Input.current.value, this.password2Input.current.value);
              }}>Set password</Button>
              {!(match === '')
                && <FormMessage error>
                     <TextSmall>{ match }</TextSmall>
                  </FormMessage>}
            </FormGroup>
          </Form>
        </CenterWrapper>
       </Page>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  hash: state.router.location.hash,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  postNewPassword: (credentials: NewPasswordType) => dispatch(postNewPassword(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
