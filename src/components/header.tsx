import * as React from 'react';

import logo from '../logo.svg';

import { connect } from "react-redux";
import * as reducers from "../redux/reducers";

interface IOwnProps {}

interface IConnectedState {
    counter: reducers.Counter,
}

const mapStateToProps = (state: reducers.All, ownProps: IOwnProps): IConnectedState => ({
    counter: state.counter
})

interface IHeaderState {}

class Header extends React.Component<IConnectedState & IOwnProps, IHeaderState> {
  public render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Counter: {this.props.counter.numCounter}</h1>
      </header>
    );
  }
}

export const WrappedHeader = connect(mapStateToProps)(Header);