import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import i18n from '../../utils/i18n';
import { WithTranslation, withTranslation } from 'react-i18next';

import { UTILS } from '../../store/constants';
import { history } from '../../store/store';

import {
  StoreType,
  NewPasswordType,
} from '../../store/types';

import {
  setToken,
  postNewPassword
} from '../../store/modules/auth/actions';

import Empty from '../../components/pages/Empty';
import CenterMessage from '../../components/elements/CenterMessage';

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
} from '../../theme/widgets';

interface StateToProps {
  hash : string;
  isFetching: boolean,
  result: string,
};

interface DispatchProps {
  setToken : (token: string) => void;
  postNewPassword : (credentials: NewPasswordType) => void;
}

interface Props extends StateToProps, DispatchProps, WithTranslation {};

const initialState = {
  id: '',
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
    isFetching: nextProps.isFetching,
    result: nextProps.result,
  });

  constructor(props) {
    super(props);

    this.password1Input = React.createRef();
    this.password2Input = React.createRef();
  };

  readonly state : State = initialState;

  public componentDidMount() : void {
    const query = this.state.hash;
    const id = query.split('&')[0].slice(4);
    const token = query.split('&')[1].slice(6);
    this.props.setToken(token);
    this.setState({
      id: id,
    });
  };

  public componentDidUpdate(prevProps) {
    if (this.props.result !== prevProps.result) history.push('/');
  };

  private submit = (password1 : string, password2 : string) : void => {
    const password1Valid = this.validatePassword(password1, 1);
    const password2Valid = this.validatePassword(password2, 2);

    if (password1 !== password2) {
      this.setState({
        match: i18n.t('validations.passwords_do_not_match'),
      });
      return;
    } else {
      this.setState({
        match: '',
      });
    }

    if (password1Valid && password2Valid) {
      this.props.postNewPassword({ id: this.state.id, password: password1 });
    }
  };

  private validatePassword = (password : string, number: number) : boolean => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;
    const validate = regExp.test(password);
    const minLenght = UTILS.min_password_lenght;
    let passError;
    if (password === '') {
      passError = i18n.t('validations.is_required');
    } else if (password.length < minLenght) {
      passError = i18n.t('validations.password_min_lenght.part1') + String(minLenght) + i18n.t('validations.password_min_lenght.part2');
    } else if (!validate) {
      passError = i18n.t('password_contain_digit');
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
    const { i18n, isFetching } = this.props;
    const { pass1Error, pass2Error, match } = this.state;

    return (
      <React.Fragment>
        { isFetching ?
          <Empty outer /> :
          <Page outer>
            <CenterWrapper>
              <CenterMessage>
                <TextLarge>{i18n.t('password.title')}</TextLarge>
              </CenterMessage>
              <Form>
                <FormGroup>
                  <Input
                    type="password"
                    aria-label={i18n.t('password.password1.aria-label')}
                    placeholder={i18n.t('password.password1.placeholder')}
                    ref={this.password1Input}
                   />
                   {!(pass1Error === '')
                     && <FormMessage state="error">
                           <TextSmall>{ pass1Error }</TextSmall>
                        </FormMessage>}
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    aria-label={i18n.t('password.password2.aria-label')}
                    placeholder={i18n.t('password.password2.placeholder')}
                    ref={this.password2Input}
                   />
                   {!(pass2Error === '')
                     && <FormMessage state="error">
                           <TextSmall>{ pass2Error }</TextSmall>
                        </FormMessage>}
                </FormGroup>
                <FormGroup>
                  <Button
                    type="submit"
                    aria-label={i18n.t('password.submit_button.aria-label')}
                    onClick={(e) => {
                      e.preventDefault();
                      this.submit(this.password1Input.current.value, this.password2Input.current.value);
                  }}>{i18n.t('password.submit_button.text')}</Button>
                  {!(match === '')
                    && <FormMessage state="error">
                         <TextSmall>{ match }</TextSmall>
                      </FormMessage>}
                </FormGroup>
              </Form>
            </CenterWrapper>
           </Page>}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  hash: state.router.location.hash,
  isFetching: state.rootReducer.auth.isFetching,
  result: state.rootReducer.auth.result,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  setToken: (token: string) => dispatch(setToken(token)),
  postNewPassword: (credentials: NewPasswordType) => dispatch(postNewPassword(credentials)),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Login));
