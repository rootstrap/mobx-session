import React from 'react';
import { observer } from 'mobx-react';
import SessionStore from 'mobx-session';

import Login from 'components/Login';
import Logout from 'components/Logout';
import SessionInfo from 'components/SessionInfo';

const Home = observer(() => {
  if (SessionStore.initialized) {
    return (
      <div>
        <SessionInfo />
        {
          SessionStore.hasSession
            ? <Logout />
            : <Login />
        }
      </div>
    );
  }

  return null;
});

export default Home;
