import * as _ from 'lodash';

export class Reducer {
  constructor(handlers={}) {
    this.handlers = handlers;
    this.defaults = {
      errors: {}
    };

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
    delete this.defaults[action];

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
   * Register a new error handler
   *
   * @param {String}  action  Action name/type
   * @param {Handler} handler Handler for this action
   *
   * @return {Reducer} this This instance
   */
  registerErrorHandler(action, handler) {
    // Only add the handler if no handler for the given aciton is registered.
    // If one wants to replace a handler, use unregister/register or replace
    if (!this.handlers[action]) this.handlers[action] = handler;
    this.defaults.errors[handler.getName()] = handler.getDefaults();
    return this;
  }

  /**
   * Unregister the error handler for the given action
   *
   * @param {String} action Action name/type
   *
   * @return {Reducer} this This instance
   */
  unregisterErrorHandler(action) {
    delete this.handlers[action];
    delete this.defaults.errors[action];

    return this;
  }

  /**
   * Replace the given error handler
   *
   * @param {String}  action  Action name/type
   * @param {Handler} handler Handler for this action
   *
   * @return {Reducer} this This instance
   */
  replaceErrorHandler(action, handler) {
    this.unregisterErrorHandler(action);
    this.registerErrorHandler(action, handler);

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
    const { type } = action;
    let result = state;

    if (this.isResponsible(type)) {
      const handler = this.handlers[type];
      result = handler.handle(state, action);
    }

    return result;
  }
}
