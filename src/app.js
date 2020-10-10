import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';

import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
  </Router>
);

export default App;
