import { Handler } from '../../Handler';

export class ErrorHandler extends Handler {
  constructor(name='error') {
    super(name, false);
  }

  handle(state, action) {
    console.log(`AN ERROR OCCURED ON ${action.type}`, action.payload);

    const errors = {...state.errors};
    errors[this.name] = action.payload;
    const result = {...state, errors};

    return result;
  }
}
