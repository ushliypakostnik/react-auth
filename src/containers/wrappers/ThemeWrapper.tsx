import * as React from 'react';

import { connect } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { ThemeProvider } from 'styled-components';

import { THEMES } from '../../store/constants';

import { GlobalStyle } from "../../theme/theme";
import themeLight from "../../theme/themes/theme-light";
import themeDark from "../../theme/themes/theme-dark";

import App from '../App';

import { StoreType } from '../../store/types';

interface StateToProps {
  t : string;
};

interface Props extends StateToProps {};

const initialState = {};

type State = Readonly<typeof initialState>;

class ThemeWrapper extends React.Component<StateToProps, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    t: nextProps.t,
  });

  readonly state : State = initialState;

  render() {
    const { t } = this.props;

    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={t === THEMES[0].name ? themeLight : themeDark}>
          <App />
        </ThemeProvider>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  t: state.rootReducer.utils.theme,
});

export default connect(mapStateToProps, null)(ThemeWrapper);
