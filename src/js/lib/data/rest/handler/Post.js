import { Handler } from '../../Handler';

export class PostHandler extends Handler {
  constructor() {
    super('post', {});
  }

  handle(state, action) {
    const result = {...state, [this.name]: action.payload};
    result.all.push(action.payload);

    return result;
  }
}
