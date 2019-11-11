import React from 'react';
import ReactDOM from 'react-dom';
import ScreensRoot from './screens/Root';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import comments from './store/comments'

const store = createStore(
  comments,
  applyMiddleware(thunk)
);

ReactDOM.render(<ScreensRoot store={store} />, document.getElementById('root'));
serviceWorker.unregister();
