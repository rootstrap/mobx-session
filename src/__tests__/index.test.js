import SessionStore from '../index';
import { Storage } from '../storage';

const SESSION = { token: 'abc123' };
const SESSION_KEY = 'session';

describe('SessionStore', function () {
  beforeEach(function () {
    SessionStore.deleteSession();
  });

  test('saves session in store', () => {
    SessionStore.saveSession(SESSION);
    expect(SessionStore.session).toStrictEqual(SESSION);
  });

  test('saves session in storage', () => {
    SessionStore.saveSession(SESSION);
    expect(Storage.get(SESSION_KEY)).toStrictEqual(SESSION);
  });

  test('deletes session from store', () => {
    SessionStore.saveSession(SESSION);
    SessionStore.deleteSession();
    expect(SessionStore.session).toBe(null);
  });

  test('deletes session from storage', () => {
    SessionStore.saveSession(SESSION);
    SessionStore.deleteSession();
    expect(Storage.get(SESSION_KEY)).toBe(null);
  });

  test('has session', () => {
    SessionStore.saveSession(SESSION);
    expect(SessionStore.hasSession).toBe(true);
  });

  test('doesnt have session', () => {
    expect(SessionStore.hasSession).toBe(false);
  });
});
