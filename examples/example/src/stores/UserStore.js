import { extendObservable, runInAction } from 'mobx';
import SessionStore from 'mobx-session';

import sessionApi from 'api/sessionApi';

class Store {
  constructor() {
    SessionStore.initialize({ name: 'example-app' });
    const user = SessionStore.getSession() || null;
    extendObservable(this, {
      user,
      loginError: false,
      logoutError: false,
      get loggedIn() {
        return this.user !== null && SessionStore.session !== null;
      },
    });
  }

  saveUser = (user) => {
    SessionStore.saveSession({ user });
    runInAction('Save user', () => {
      this.user = user;
    });
  }

  removeUser = () => {
    SessionStore.deleteSession();
    runInAction('Logout user', () => {
      this.user = null;
    });
  }

  login = async (user) => {
    try {
      runInAction('Init Login', () => {
        this.loginError = false;
      });
      const { data } = await sessionApi.login(user);
      this.saveUser(data);
    } catch (error) {
      runInAction('Error Login', () => {
        this.loginError = error.errors;
      });
    }
  }

  logout = async () => {
    try {
      runInAction('Init Logout', () => {
        this.logoutError = false;
      });
      await sessionApi.logout();
      this.removeUser();
    } catch (error) {
      runInAction('Error Logout', () => {
        this.logoutError = error.errors;
      });
    }
  }
}

const UserStore = new Store();

export default UserStore;
