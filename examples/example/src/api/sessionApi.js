const login = (user) => {
  const response = {
    token: '1a2b3c4d',
    data: {
      email: user.email,
      firstName: 'test',
      lastName: 'test'
    }
  };
  return new Promise(resolve => setTimeout(resolve(response), 300));
};

const logout = () => new Promise(resolve => setTimeout(resolve, 300));

export default { login, logout };
