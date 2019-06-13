import React from 'react';

import UserStore from 'stores/UserStore';

const Logout = () => (
  <div>
    Try refreshing the page to see that the session is saved
    <hr />
    <button onClick={UserStore.logout}>Logout</button>
  </div>
);

export default Logout;
