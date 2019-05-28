import { extendObservable, runInAction } from 'mobx';

import { Storage } from './storage';

const SESSION_KEY = 'session';

class Store {
  constructor() {
    const session = Storage.get(SESSION_KEY) || null;
    extendObservable(this, {
      session,
      get hasSession() {
        return this.session !== null;
      },
    });
  }

  saveSession = (session) => {
    Storage.set(SESSION_KEY, session);
    runInAction(() => {
      this.session = session;
    });
  }

  deleteSession = () => {
    Storage.remove(SESSION_KEY);
    runInAction(() => {
      this.session = null;
    });
  }
}

const SessionStore = new Store();
export default SessionStore;
