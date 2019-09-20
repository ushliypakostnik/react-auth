import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { history } from '../../store/store';

import { StoreType } from '../../store/types';

import { setToken } from '../../store/modules/auth/actions';

import Empty from '../../components/pages/Empty';

interface StateToProps {
  search : string;
};

interface DispatchProps {
  setToken: (token: string) => void;
}

interface Props extends StateToProps, DispatchProps {};

const initialState = {};

type State = Readonly<typeof initialState>;

class Verify extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    search: nextProps.search,
  });

  public componentDidMount() {
    const token = this.props.search.slice(7);
    this.props.setToken(token);
    history.replace('/');
  }

  readonly state : State = initialState;

  render() {
    return <Empty />;
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  search: state.router.location.search,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
   setToken: (token: string) => dispatch(setToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
