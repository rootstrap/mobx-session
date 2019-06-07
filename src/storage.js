import localforage from 'localforage';

class StorageClass {
  constructor() {
    this.storage = null;
  }

  initialize(options) {
    this.storage = localforage.createInstance(options);
  }

  get(key) {
    return this.storage.getItem(key);
  }

  set(key, item) {
    if (item === undefined) {
      return;
    }
    this.storage.setItem(key, item);
  }

  remove(key) {
    this.storage.removeItem(key);
  }
}

export const Storage = new StorageClass();
