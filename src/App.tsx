import * as React from 'react';
import './App.css';

import { WrappedHeader } from "./components/header"
import { WrappedBody } from './components/body';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <WrappedHeader />
        <WrappedBody />
      </div>
    );
  }
}

export default App;