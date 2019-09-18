import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import i18n from '../../utils/i18n';
import { WithTranslation, withTranslation } from 'react-i18next';

import { StoreType } from '../../store/types';

import { authLogout } from '../../store/modules/auth/actions';
import {
  getUser,
  postVerifyEmail,
} from '../../store/modules/user/actions';

import Empty from '../../components/pages/Empty';
import LangSwitch from '../utils/LangSwitch';

import {
  Page,
  CenterWrapper,
  Button,
  ButtonWrapper,
  TextLarge,
  TextSmall,
  TextString,
  Form,
  FormGroup,
  FormMessage,
  Footer,
} from '../../theme/widgets';

interface DispatchProps {
  authLogout : () => void;
  getUser : () => void;
  postVerifyEmail: (usermail: string) => void;
};

interface StateToProps {
  isFetching: boolean;
  profile : {
    usermail: string;
    isVerify: boolean;
  };
  success: boolean;
};

interface Props extends DispatchProps, StateToProps, WithTranslation {};

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
    const { i18n, isFetching, profile, success } = this.props;

    return (
      <React.Fragment>
        { isFetching ?
          <Empty /> :
          <Page footer>
            <CenterWrapper>
              <Form>
                <TextString top>
                  <TextLarge light>{i18n.t('account.field1')}:</TextLarge>
                </TextString>
                <TextString>
                  <TextLarge>{ profile.usermail }</TextLarge>
                </TextString>
                <TextString>
                  <TextLarge light>{i18n.t('account.field2')}: </TextLarge>
                  <TextLarge>{ profile.isVerify ? i18n.t('boolean.true') : i18n.t('boolean.false') }</TextLarge>
                </TextString>
                <ButtonWrapper>
                  <Button
                    type="button"
                    aria-label={i18n.t('account.logout_button.aria-label')}
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.authLogout();
                  }}>{i18n.t('account.logout_button.text')}</Button>
                  {!profile.isVerify &&
                    <FormGroup>
                      <Button
                        type="button"
                        aria-label={i18n.t('account.resend_button.aria-label')}
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.postVerifyEmail(profile.usermail);
                      }}>{i18n.t('account.resend_button.text')}</Button>
                      <FormMessage state="success">
                        <TextSmall>
                          { success ? i18n.t('validations.resend_verify_email') : i18n.t('validations.verify_account') }
                        </TextSmall>
                      </FormMessage>
                    </FormGroup>}
                 </ButtonWrapper>
              </Form>
            </CenterWrapper>
            <Footer><LangSwitch /></Footer>
          </Page>}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  isFetching: state.rootReducer.user.isFetching,
  profile: state.rootReducer.user.profile,
  success: state.rootReducer.user.success,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
  authLogout: () => dispatch(authLogout()),
  getUser: () => dispatch(getUser()),
  postVerifyEmail: (usermail: string) => dispatch(postVerifyEmail(usermail)),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Account));
