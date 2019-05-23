import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ScreensEventList from './List/List';
import ScreensEventForm from './Event/Form';
import ScreensHeaderNav from './Header/Nav';

import GlobalStyle from '../components/UI/GlobalStyles';
import Theme from '../components/UI/Theme';
import Inner from '../components/UI/Inner';

const ScreensRoot = ({ store }) => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyle />
          <ScreensHeaderNav />
          <Inner>
            <Route exact path="/" component={ScreensEventList} />
            <Route path="/form" component={ScreensEventForm} />
          </Inner>
        </>
      </ThemeProvider>
    </Router>
  </Provider>
);

export default ScreensRoot;
