class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  set(key, item) {
    if (item === undefined) {
      return;
    }
    this.storage.setItem(key, JSON.stringify(item));
  }

  remove(key) {
    this.storage.removeItem(key);
  }
}

export const Storage = new LocalStorage();
