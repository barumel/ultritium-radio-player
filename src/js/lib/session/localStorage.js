const EventEmitter = require('events');
const _ = require('lodash');

export default class SessionLocalStorage extends EventEmitter{
  constructor() {
    super();

    this.user = null;
    this.data = {};
    this.storage = window.localStorage;
  }

  load() {
    const { storage } = this;

    return new Promise((resolve, reject) => {
      let session = storage.getItem('session');
      session = JSON.parse(session) || {};;
      const { user=null, data={} } = session;

      this.user = user;
      this.data = data;

      this.emit('session.loaded', this);

      return resolve(this);
    });
  }

  save() {
    const { user, data, storage } = this;
    const session = {
      user: user,
      data: data
    }

    // Make it async to keep compability with other sessions
    return new Promise((resolve, reject) => {
      storage.setItem('session', JSON.stringify(session));
      this.emit('session.saved', this);
      resolve(this);
    });
  }

  async destroy() {
    this.user = null;
    this.data = {};

    const result = await this.save();
    this.emit('session.destroyed', this);

    return this;
  }

  getUser() {
    return this.user;
  }

  async setUser(user) {
    this.user = user;

    const result = await this.save();
    this.emit('session.user.changed', user);

    return result;
  }

  async removeUser() {
    this.user = null;
    this.emit('session.user.changed', null);
    this.emit('session.user.removed', this);

    return this.save();
  }

  async setData(key, value) {
    this.data[key] = value;

    const result = await this.save();
    this.emit('session.data.changed', this.data);

    return this.result;
  }

  getData(key) {
    return this.data[key];
  }

  async removeData(key) {
    delete this.data[key];

    const result = await this.save();
    this.emit('session.data.removed', key);

    return result;
  }

  isAuthenticated() {
    return !_.isNull(this.user);
  }

}
