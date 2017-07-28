import { Handler } from '../../Handler';

export class PostHandler extends Handler {
  constructor() {
    super('post', {});
  }

  handle(state, action) {
    const result = {...state, [this.name]: action.payload};
    if (result.all) result.all.push(action.payload);
    if (result.recent) result.recent.unshift(action.payload)

    return result;
  }
}
