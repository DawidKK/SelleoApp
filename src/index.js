import React from 'react';
import ReactDOM from 'react-dom';
import ScreensRoot from './screens/Root';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<ScreensRoot store={store} />, document.getElementById('root'));
serviceWorker.unregister();
