import React from 'react';
import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';

import Login from 'components/Login';
import Logout from 'components/Logout';
import SessionInfo from 'components/SessionInfo';

const Home = observer(() => (
  <div>
    <SessionInfo />
    {
      SessionStore.hasSession
        ? <Logout />
        : <Login />
    }
  </div>
));

export default Home;
