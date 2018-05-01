import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import * as redux from "redux";
import { reducers } from "./redux/reducers";
import * as state from "./redux/reducers";

const store: redux.Store<state.All> = redux.createStore(
	reducers,
	{} as state.All
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();