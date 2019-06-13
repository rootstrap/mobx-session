import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { shape } from 'prop-types';

import UserStore from 'stores/UserStore';
import Input from 'components/Input';

const Login = ({ history }) => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const onSubmit = () => {
    if (email && password) {
      UserStore.login({ email, password }, history);
    }
  };

  return (
    <div>
      <Input type="text" onChange={updateEmail} name="email" />
      <Input type="password" onChange={updatePassword} name="password" />

      <button type="submit" onClick={onSubmit}>Login</button>
    </div>
  );
};

Login.propTypes = {
  history: shape()
};

export default withRouter(Login);
