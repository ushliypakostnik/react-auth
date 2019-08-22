import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { credentialsType } from '../store/types';

import { fetchAuth } from '../store/actions';

import styled from 'styled-components';
import {
  OuterPage,
  Form,
  Input,
  Button,
  Link,
} from '../theme/widgets';

export const LoginFormWrapper = styled.div`
  margin-top: -10%;
  width: 300px;

`;

interface Props {
  fetchAuth: (credentials: credentialsType) => void;
}

interface State {
  mailError: string;
  passError: string;
}

class Login extends React.Component<Props, State> {
  private usermailInput: React.RefObject<HTMLInputElement>;
  private passwordInput: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.usermailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  public state = {
    mailError: '',
    passError: '',
  };

  public submit = credentials => {
    this.props.fetchAuth(credentials);
  };

  private validateEmail = (email : string) : void => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validate = regExp.test(email);
    if (email === '') {
      this.setState({
        mailError: 'This field is required!',
      });
    } else if (validate) {
      this.setState({
        mailError: '',
      });
    } else {
      this.setState({
        mailError: 'Invalid email!',
      });
    }
  };

  private validatePassword = (password : string) : void => {
    const minLenght = 6;
    // eslint-disable-next-line no-useless-escape
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])$/;
    const validate = regExp.test(password);
    if (password === '') {
      this.setState({
        passError: 'This field is required!',
      });
    } else if (password.length < minLenght) {
      this.setState({
        passError: `Your password must be at least ${minLenght} characters`,
      });
    } else if (!validate) {
      this.setState({
        passError: 'Your password must contain at least one lowercase letter and least one digit.',
      });
    }
  }

  render() {
    return (
      <OuterPage>
        <LoginFormWrapper>
          <Form>
            <Input
              type="email"
              placeholder="Username"
              ref={this.usermailInput}
            />
            {!(this.state.mailError === '') && <p>{this.state.mailError}</p>}
            <Input
              type="password"
              placeholder="Password"
              ref={this.passwordInput}
             />
             {!(this.state.passError === '') && <p>{this.state.passError}</p>}
            <Button type="submit" onClick={(e) => {
              e.preventDefault();
              this.validateEmail(this.usermailInput.current.value);
              this.validatePassword(this.passwordInput.current.value);
              // this.submit({usermail: 'dfsdf', password: 'dfsdfsdf'});
            }}>Login</Button>
            <Link
              href="#"
              rel="noopener noreferrer"
            >Забыли пароль?</Link>
          </Form>
        </LoginFormWrapper>
       </OuterPage>
    );
  }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : Props => ({
  fetchAuth: (credentials: credentialsType) => dispatch(fetchAuth(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
