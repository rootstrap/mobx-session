import React from 'react';

import Logout from 'components/Logout';
import SessionInfo from 'components/SessionInfo';

const Home = () => (
  <div>
    <SessionInfo />
    <Logout />
  </div>
);

export default Home;
