[![Build Status](https://travis-ci.com/rootstrap/mobx-session.svg?branch=master)](https://travis-ci.com/rootstrap/mobx-session)
[![Maintainability](https://api.codeclimate.com/v1/badges/7779ab5005e559a3104a/maintainability)](https://codeclimate.com/github/rootstrap/mobx-session/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7779ab5005e559a3104a/test_coverage)](https://codeclimate.com/github/rootstrap/mobx-session/test_coverage)

# Mobx Session

Mobx Session helps you manage your session data providing an API to save and access your info whenever and wherever you want.

The stored data will be saved with [localforage](https://github.com/localForage/localForage).

## Installation
yarn:

`yarn add mobx-session`

npm:

`npm install mobx-session`

## Usage

It's really straight forward to use.

First you must initialize the Storage. For that, you should call

```javascript
import SessionStore from 'mobx-session';

SessionStore.initialize();
```

**This should be called before any other method call, so I would recommend putting it on the index.js or App of your site, or in the top of another Store that uses SessionStore (like in [this example](examples/example/src/stores/UserStore.js)).**

There are several config options to customize this method, go to the [API doc](https://github.com/rootstrap/mobx-session#initializeconfig-object-promise) to see more.

For example

```javascript
import SessionStore from 'mobx-session';

SessionStore.initialize({ name: 'my-app-name' });
```

Then, you can use it wherever you want.

### Inside a Component

```javascript
import SessionStore from 'mobx-session';

const MyComponent = observer(() => (
  <div>
  {
    SessionStore.hasSession
    ? <p>Hello!</p>
    : <p>Login</p>
  }
  </div>
))
```

You can use the decorator syntax

```javascript
import SessionStore from 'mobx-session';

@observer
const MyComponent = () => (
  <div>
  {
    SessionStore.hasSession
    ? <p>Hello!</p>
    : <p>Login</p>
  }
  </div>
)
```

*TIP: don't forget to make your component an observer so you don't loose the reference.*

### Inside a Store

```javascript
import SessionStore from 'mobx-session';

class UserStore {
  constructor() {
    extendObservable(this, {
      user: null,
      get loggedIn() {
        return this.user !== null && SessionStore.hasSession;
      },
    });
  }
  ......
}
```

You can also use the decorator syntax

```javascript
import SessionStore from 'mobx-session';

class UserStore {
    @observable user = null;
    @computed get loggedIn() {
        return this.user !== null && SessionStore.hasSession;
    }
    ......
}
```

*TIP: inside a store, don't forget to use it inside a computed value or an auto-run so you don't loose the reference.*

## Examples

[Basic example using React](examples/example)

## API

### initialize(config: object): Promise

Initialize an instance of the storage inside the session.

Options can be the ones listed in the [localforage library](https://github.com/localForage/localForage#configuration)

### saveSession(session: object): Promise

Saves the session object in the store and storage

### deleteSession(): Promise

Deletes the session object from the store and the storage

### getSession(): Promise(session: object)

Returns the session object saved if there's any

### hasSession: boolean

Returns true if there's a session object saved and false if there's not.

## Contributing
Bug reports (please use Issues) and pull requests are welcome on GitHub at https://github.com/rootstrap/mobx-session. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License
The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Credits
**mobx-session** is maintained by [Rootstrap](http://www.rootstrap.com) with the help of our [contributors](https://github.com/rootstrap/mobx-session/contributors).

[<img src="https://s3-us-west-1.amazonaws.com/rootstrap.com/img/rs.png" width="100"/>](http://www.rootstrap.com)
