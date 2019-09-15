import * as React from 'react';

import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { history } from '../../store/store';

import {
  StoreType,
} from '../../store/types';

import { postVerify } from '../../store/modules/verify/actions';

import Empty from '../../components/pages/Empty';

interface StateToProps {
  search : string;
  result : string;
};

interface DispatchProps {
  postVerify : (id: string) => void;
}

interface Props extends StateToProps, DispatchProps {};

const initialState = {};

type State = Readonly<typeof initialState>;

class Verify extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    search: nextProps.search,
    result: nextProps.result,
  });

  public componentDidMount() {
    const id = this.props.search.slice(4);
    this.props.postVerify(id);
  }

  public componentDidUpdate(prevProps) {
    if (this.props.result !== prevProps.result) history.push('/');
  }

  readonly state : State = initialState;

  render() {
    return <Empty outer />;
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  search: state.router.location.search,
  result: state.rootReducer.verify.result,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) : DispatchProps => ({
   postVerify: (id: string) => dispatch(postVerify(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
