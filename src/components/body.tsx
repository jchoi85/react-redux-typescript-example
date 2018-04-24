import * as React from 'react';

import * as actions from "../redux/actions";
import * as reducers from "../redux/reducers";
import * as redux from "redux";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../redux/actions";

interface IOwnProps { }

type ConnectedState = {
  counter: reducers.Counter,
}

const mapStateToProps = (state: reducers.All, ownProps: IOwnProps): ConnectedState => ({
  counter: state.counter
})

type ConnectedDispatch = {
  incrementCounter: (incCounter: number) => void;
  decrementCounter: (decCounter: number) => void;
  resetCounter: () => void;
}

const mapDispatchToProps = (dispatch: redux.Dispatch<actions.Action>): ConnectedDispatch => (
  {
    incrementCounter: (incCounter: number) => {
      dispatch(incrementCounter(incCounter));
    },
    decrementCounter: (decCounter: number) => {
      dispatch(decrementCounter(decCounter));
    },
    resetCounter: () => {
      dispatch(resetCounter());
    }
  })

interface IBodyState {
  increment: string;
}

class Body extends React.Component<ConnectedState & ConnectedDispatch & IOwnProps, IBodyState> {
  constructor(props: any) {
    super(props);
    this.state = ({
      increment: "1"
    });
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public render() {
    return (
      <div className="container" style={{ paddingTop: "30px" }}>
        <div className="row">
          <button className="btn" onClick={this.incrementCounter}>Increment</button>
          &nbsp; &nbsp;
          <button className="btn" onClick={this.decrementCounter}>Decrement</button>
        </div>
        <div className="row" style={{ paddingTop: "30px" }}>
          Increment value:&nbsp;
          <input value={this.state.increment} onChange={this.onChange} style={{textAlign: "right"}}/>
        </div>
        <div className="row" style={{ paddingTop: "30px" }}>
        <button className="btn" onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }

  private incrementCounter() {
    this.props.incrementCounter(parseInt(this.state.increment, 10));
  }

  private decrementCounter() {
    this.props.decrementCounter(parseInt(this.state.increment, 10));
  }

  private resetCounter() {
    this.props.resetCounter();
  }

  private onChange(e: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      increment: e.target.value
    })
  }
}

export const WrappedBody = connect(mapStateToProps, mapDispatchToProps)(Body);