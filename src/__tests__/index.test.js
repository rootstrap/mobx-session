import "@babel/polyfill";

import SessionStore from '../index';

const SESSION = { token: 'abc123' };

describe('SessionStore', () => {
  beforeEach(async () => {
    await SessionStore.initialize();
    await SessionStore.deleteSession();
  });

  describe('saveSession', () => {
    let session;

    beforeEach(async () => {
      await SessionStore.saveSession(SESSION);
      session = await SessionStore.getSession();
    });

    it('should have saved the passed data', () => {
      expect(session).toStrictEqual(SESSION);
    });
  });

  describe('deleteSession', () => {
    let session;

    beforeEach(async () => {
      await SessionStore.saveSession(SESSION);
      await SessionStore.deleteSession();
      session = await SessionStore.getSession();
    });

    it('should have the session as null', () => {
      expect(session).toBe(null);
    });
  });

  describe('hasSession', () => {
    describe('when the session has been already saved', () => {
      beforeEach(async () => {
        await SessionStore.saveSession(SESSION);
      });

      it('should return true', () => {
        expect(SessionStore.hasSession).toBe(true);
      });
    });

    describe('when the session has not been saved', () => {
      it('should return false', () => {
        expect(SessionStore.hasSession).toBe(false);
      });
    });
  });
});
