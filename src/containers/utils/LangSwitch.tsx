import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { StoreType } from '../../store/types';

import { LANGUAGES } from '../../store/constants';

import {
  changeLanguage,
  clearMessages
} from '../../store/modules/utils/actions';

import {
  Card,
  TextNormal,
} from '../../theme/widgets';

interface StateToProps {
  language : string;
};

interface DispatchProps {
  changeLanguage : (language: string) => void;
  clearMessages: () => void;
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
    const { language } = this.props;

    return (
      <Card switch>
        {LANGUAGES.map((lang, index) => {
          return (
            <TextNormal key={index} bold uppercase>
              {language !== lang.name ?
                <a
                  href="#"
                  onClick={e => {
                  e.preventDefault();
                  this.props.changeLanguage(lang.name);
                  this.props.clearMessages();
                }}
                >{ lang.name }</a> :
                <span>{ lang.name }</span>}
                {index < LANGUAGES.length - 1 && <span> / </span>}
            </TextNormal>);
        })}
      </Card>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  language: state.rootReducer.utils.language,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
   changeLanguage: (language: string) => dispatch(changeLanguage(language)),
   clearMessages: () => dispatch(clearMessages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSwitch);
