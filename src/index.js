import { extendObservable, runInAction } from 'mobx';
import { Storage } from './storage';

import { DEFAULT_INSTANCE_NAME, SESSION_KEY } from './constants';

class Store {
  constructor() {
    extendObservable(this, {
      hasSession: false,
    });
  }

  initialize = (options = { name: DEFAULT_INSTANCE_NAME }) => {
    Storage.initialize(options);
    // const hasSession = await this.getSession() !== null;
    // runInAction(() => {
    //   this.hasSession = hasSession;
    // });
  }

  saveSession = async (session) => {
    await Storage.set(SESSION_KEY, session);
    runInAction(() => {
      this.hasSession = true;
    });
  }

  getSession = () => Storage.get(SESSION_KEY);

  deleteSession = () => {
    Storage.remove(SESSION_KEY);
    runInAction(() => {
      this.hasSession = false;
    });
  }
}

export default new Store();
