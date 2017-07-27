import { Get } from './action/Get';
import { Find } from './action/Find';
import { All } from './action/All';

export class RestActions {
  constructor(prefix, url, actions={}) {
    this.prefix = prefix.toUpperCase();
    this.url = url;
    this.actions = actions;

    this.registerAction('FIND', new Find(url));
    this.registerAction('ALL', new All(url));
    this.registerAction('GET', new Get(url));
  }

  registerAction(name, action) {
    name = name.toUpperCase();
    this.actions[name] = action;

    return this;
  }

  unregisterAction(name) {
    name = name.toUpperCase();
    delete this.actions[name];

    return this;
  }

  execute(name, params) {
    name = name.toUpperCase();
    const action = this.actions[name];
    const { prefix } = this;

    return async function(dispatch) {
      dispatch({
        type: `${prefix}_${name}_START`,
        payload: params
      });

      try {
        const result = await action.execute(params);
        dispatch({
          type: `${prefix}_${name}_FULFILLED`,
          payload: result
        });
      } catch(err) {
        dispatch({
          type: `${prefix}_${name}_REJECTED`,
          payload: err
        });
      }
    }

  }
}
