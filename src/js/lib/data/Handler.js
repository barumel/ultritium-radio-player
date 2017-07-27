export class Handler {
  /**
   * Constructor
   *
   * @param {String} name     Name of this handler. The received data will be stored under this name
   * @param {Mixed}  defaults Default values for this handler
   *
   * @return void
   */
  constructor(name=false, defaults=false) {
    if (!name) throw new Error('You must pass a name for this handler!');
    this.name = name;
    this.defaults = defaults;
  }

  getName() {
    return this.name;
  }

  getDefaults() {
    return this.defaults;
  }

  handle(state, action) {
    const result = {...state, [this.name]: action.payload || this.defaults };

    return result;
  }
}
