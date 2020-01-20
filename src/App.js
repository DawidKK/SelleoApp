import React from 'react';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import HttpsRedirect from 'react-https-redirect'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import comments from './store/comments';

import { ThemeProvider } from 'styled-components';
import Theme from './components/UI/Theme';
import Inner from './components/UI/Inner';
import GlobalStyle from './components/UI/GlobalStyles';

import ScreensEventForm from './screens/Event/Form';
import ScreensCommentsList from './screens/Evaluation/';
import ScreensUserBoard from './screens/User';

import { Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import history from './utils/history';

function App() {
  const store = createStore(comments, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <HttpsRedirect>
        <Router history={history}>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Navbar />
            <Inner>
              <Switch>
                <Route path="/" exact />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/form" component={ScreensEventForm} />
                <PrivateRoute path="/evaluation" component={ScreensCommentsList} />
                <PrivateRoute path="/user" component={ScreensUserBoard} />
              </Switch>
            </Inner>
          </ThemeProvider>
        </Router>
      </HttpsRedirect>
    </Provider>
  );
}

export default App;
