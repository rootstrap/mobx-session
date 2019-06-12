import React, { useState } from 'react';

import UserStore from 'stores/UserStore';
import Input from 'components/Input';

const Login = () => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');

  const onSubmit = () => {
    if (email && password) {
      UserStore.login({ email, password });
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

export default Login;
