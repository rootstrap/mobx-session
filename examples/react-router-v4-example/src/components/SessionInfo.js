import React from 'react';
import { observer } from 'mobx-react';

import UserStore from 'stores/UserStore';

const infoStyles = {
  backgroundColor: 'lightgray',
  padding: 20,
  margin: 10
};

const SessionInfo = observer(({ userInfo: { user } }) => (
  <div>
    <p>Current Session Info:</p>
    { user ?
      <div style={infoStyles}>
        email: { user.email }<br />
        firstName: { user.firstName }<br />
        lastName: { user.lastName }<br />
      </div>
      : <p>No session info</p>
    }
    <hr />
  </div>
));

const ConnectedSessionInfo = () => <SessionInfo userInfo={UserStore} />;

export default ConnectedSessionInfo;
