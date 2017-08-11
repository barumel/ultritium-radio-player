import { GetAction } from './action/Get';
import { FindAction } from './action/Find';
import { AllAction } from './action/All';
import { PostAction } from './action/Post';
import { PutAction } from './action/Put';
import { DeleteAction } from './action/Delete'

export class RestActions {
  constructor(prefix, url, actions={}) {
    this.prefix = prefix.toUpperCase();
    this.url = url;
    this.actions = actions;

    this.registerAction('FIND', new FindAction(url));
    this.registerAction('ALL', new AllAction(url));
    this.registerAction('GET', new GetAction(url));
    this.registerAction('POST', new PostAction(url));
    this.registerAction('PUT', new PutAction(url));
    this.registerAction('DELETE', new PostAction(url));
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
