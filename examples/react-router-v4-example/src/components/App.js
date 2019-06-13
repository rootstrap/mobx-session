import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';

import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';

const App = observer(() => (
  <Router>
    <div>
      {
        SessionStore.initialized &&
        <Fragment>
          <PrivateRoute exact path="/" component={Home} authenticated={SessionStore.hasSession} />
          <Route path="/login" component={Login} />
        </Fragment>
      }
    </div>
  </Router>
));

export default App;
