# Mobx Session

Mobx Session helps you manage your session data providing an API to save and access your info whenever and wherever you want.

The stored data will be saved inside a [mobx store](https://mobx.js.org/best/store.html) and the [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Installation
yarn:

`yarn add mobx-session`

npm:

`npm install mobx-session`

## Usage

It's really straight forward to use.

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

You can use the decorator sintax

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

You can also use the decorator sintax

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

*TIP: inside a store, don't forget to use it inside a computed value or an autorun so you don't loose the reference.*

## Examples

Coming soon

## API

### saveSession(session: object): void

Saves the session object in the store and storage

### deleteSession(): void

Deletes the session object from the store and the storage

### session: object

Returns the session object saved if there's any, if there's not it returns null.

### hasSession(): boolean

Returns true if there's a session object saved and false if there's not.

## Contributing
Bug reports (please use Issues) and pull requests are welcome on GitHub at https://github.com/rootstrap/mobx-session. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License
The library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Credits
**mobx-session** is maintained by [Rootstrap](http://www.rootstrap.com) with the help of our [contributors](https://github.com/rootstrap/mobx-session/contributors).

[<img src="https://s3-us-west-1.amazonaws.com/rootstrap.com/img/rs.png" width="100"/>](http://www.rootstrap.com)