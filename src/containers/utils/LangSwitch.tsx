import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
  StoreType,
} from '../../store/types';

import { LANGUAGES } from '../../store/constants';

import { changeLanguage } from '../../store/modules/utils/actions';

interface StateToProps {
  language : string;
};

interface DispatchProps {
  changeLanguage : (language: string) => void;
}

interface Props extends StateToProps, DispatchProps {};

const initialState = {};

type State = Readonly<typeof initialState>;

class LangSwitch extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    language: nextProps.language,
  });

  readonly state : State = initialState;

  render() {
    return (
      <div className="languages-switch">
        {LANGUAGES.map((language, index) => {
          return <a
                   href="#"
                   key={index}
                   onClick={e => {
                     e.preventDefault();
                     this.props.changeLanguage(language.name);
                   }}
                 >{ language.name }</a>;
        })}
      </div>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  language: state.rootReducer.utils.language,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
   changeLanguage: (language: string) => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
