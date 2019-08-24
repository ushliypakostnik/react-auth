import React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { CredentialsType } from '../store/types';

import { postNewPassword } from '../store/actions';

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

interface Props {
  postNewPassword : (credentials: CredentialsType) => void;
}

const initialState = {
  pass1Error: '',
  pass2Error: '',
};

type State = Readonly<typeof initialState>;

class Login extends React.Component<Props, State> {
  private password1Input: React.RefObject<HTMLInputElement>;
  private password2Input: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.password1Input = React.createRef();
    this.password2Input = React.createRef();
  }

  readonly state : State = initialState;

  private submit = (password1 : string, password2 : string) : void => {
    const password1Valid = this.validatePassword(password1, 1);
    const password2Valid = this.validatePassword(password2, 2);
  };

  private validatePassword = (password : string, number: number) : boolean => {
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
    switch (number) {
      case 1:
        this.setState({
          pass1Error: passError,
        });
      case 2:
        this.setState({
          pass2Error: passError,
        });
      default:
        break;
    };
    return validate;
  }

  render() {
    const { pass1Error, pass2Error } = this.state;

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
                 && <FormMessage error={!!pass1Error}>
                       <TextSmall>{pass1Error}</TextSmall>
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
                 && <FormMessage error={!!pass2Error}>
                       <TextSmall>{pass2Error}</TextSmall>
                    </FormMessage>}
            </FormGroup>
            <Button
              type="submit"
              role="button"
              aria-label="Set password"
              onClick={(e) => {
                e.preventDefault();
                this.submit(this.password1Input.current.value, this.password2Input.current.value);
            }}>Set password</Button>
          </Form>
        </CenterWrapper>
       </Page>
    );
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : Props => ({
  postNewPassword: (credentials: CredentialsType) => dispatch(postNewPassword(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
