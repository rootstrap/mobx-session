import "@babel/polyfill";

import SessionStore from '../index';

const SESSION = { token: 'abc123' };

describe('SessionStore', function () {
  beforeEach(async function () {
    await SessionStore.initialize();
    await SessionStore.deleteSession();
  });

  test('saves session', async () => {
    await SessionStore.saveSession(SESSION);
    const session = await SessionStore.getSession();
    expect(session).toStrictEqual(SESSION);
  });

  test('deletes session', async () => {
    await SessionStore.saveSession(SESSION);
    await SessionStore.deleteSession();
    const session = await SessionStore.getSession();
    expect(session).toBe(null);
  });

  test('has session', async () => {
    await SessionStore.saveSession(SESSION);
    expect(SessionStore.hasSession).toBe(true);
  });

  test('doesnt have session', () => {
    expect(SessionStore.hasSession).toBe(false);
  });
});
