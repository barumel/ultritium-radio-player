import * as _ from 'lodash';

export class Reducer {
  constructor(handlers={}) {
    this.handlers = handlers;
    this.defaults = {};

    _.forEach(handlers, (handler) => this.defaults[handler.getName()] = handler.getDefaults());
  }

  /**
   * Register a new handler
   *
   * @param {String}  action  Action name/type
   * @param {Handler} handler Handler for this action
   *
   * @return {Reducer} this This instance
   */
  registerHandler(action, handler) {
    // Only add the handler if no handler for the given aciton is registered.
    // If one wants to replace a handler, use unregister/register or replace
    if (!this.handlers[action]) this.handlers[action] = handler;
    this.defaults[handler.getName()] = handler.getDefaults();

    return this;
  }

  /**
   * Unregister the handler for the given action
   *
   * @param {String} action Action name/type
   *
   * @return {Reducer} this This instance
   */
  unregisterHandler(action) {
    delete this.handlers[action];

    return this;
  }

  /**
   * Replace the given handler
   *
   * @param {String}  action  Action name/type
   * @param {Handler} handler Handler for this action
   *
   * @return {Reducer} this This instance
   */
  replaceHandler(action, handler) {
    this.unregisterHandler(action);
    this.registerHandler(action, handler);

    return this;
  }

  /**
   * Check if this reducer is responsible for the given action/type
   *
   * @param {String} action Action name/type
   *
   * @return {Boolean}
   */
  isResponsible(action) {
    return !_.isUndefined(this.handlers[action]);
  }

  /**
   * Check if there is a handler that handles this action/type.
   * Return result from handler or state
   *
   * @param {Object} state  Current state from store
   * @param {Object} action Action object
   *
   * @return {Promise}
   */
  reduce(state=this.defaults, action) {
    console.log('DEFAULTS:', this.defaults);
    const { type } = action;
    let result = state;

    if (this.isResponsible(type)) {
      const handler = this.handlers[type];
      result = handler.handle(state, action);
    }

    return result;
  }
}
