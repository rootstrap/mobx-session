import { extendObservable, runInAction } from 'mobx';
import SessionStore from 'mobx-session';

import sessionApi from 'api/sessionApi';

class Store {
  constructor() {
    SessionStore.initialize({ name: 'example-app' });

    extendObservable(this, {
      user: null,
      loginError: false,
      logoutError: false,
      get loggedIn() {
        return this.user !== null && SessionStore.hasSession;
      }
    });

    runInAction('Load user', async () => {
      this.user = await SessionStore.getSession();
    });
  }

  saveUser = async (session) => {
    await SessionStore.saveSession(session);
    runInAction('Save user', () => {
      this.user = session;
    });
  }

  removeUser = () => {
    SessionStore.deleteSession();
    runInAction('Logout user', () => {
      this.user = null;
    });
  }

  login = async (user, history) => {
    try {
      runInAction('Init Login', () => {
        this.loginError = false;
      });
      const { data } = await sessionApi.login(user);
      await this.saveUser(data);
      history.push('/');
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
