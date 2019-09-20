import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { StoreType } from '../../store/types';

import { THEMES } from '../../store/constants';

import { changeTheme } from '../../store/modules/utils/actions';

import {
  Card,
  TextNormal,
} from '../../theme/widgets';

interface StateToProps {
  theme : string;
};

interface DispatchProps {
  changeTheme : (theme: string) => void;
}

interface Props extends StateToProps, DispatchProps {};

const initialState = {};

type State = Readonly<typeof initialState>;

class LangSwitch extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    theme: nextProps.theme,
  });

  readonly state : State = initialState;

  render() {
    const { theme } = this.props;

    return (
      <Card switch after>
        {THEMES.map((t, index) => {
          return (
            <TextNormal key={index} bold uppercase>
              {theme !== t.name ?
                <a
                  href="#"
                  onClick={e => {
                  e.preventDefault();
                  this.props.changeTheme(t.name);
                }}
                >{ t.name }</a> :
                <span>{ t.name }</span>}
                {index < THEMES.length - 1 && <span> / </span>}
            </TextNormal>);
        })}
      </Card>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  theme: state.rootReducer.utils.theme,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
   changeTheme: (theme: string) => dispatch(changeTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
