import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from '../components/Header/Nav/Nav';

import ScreensEventList from './List/List';
import ScreensEventForm from './Event/Form';
import ScreensCommentsList from './Evaluation/';

import GlobalStyle from '../components/UI/GlobalStyles';
import Theme from '../components/UI/Theme';
import Inner from '../components/UI/Inner';

const ScreensRoot = ({ store }) => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          <Nav />
          <Inner>
            <Route exact path="/" component={ScreensEventList} />
            <Route path="/form" component={ScreensEventForm} />
            <Route path="/evaluation" component={ScreensCommentsList} />
          </Inner>
        </>
      </ThemeProvider>
    </Router>
  </Provider>
);

export default ScreensRoot;
