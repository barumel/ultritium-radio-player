import { Reducer } from '../Reducer';
import { GetHandler } from './handler/Get';
import { FindHandler } from './handler/Find';
import { AllHandler } from './handler/All';
import { PostHandler } from './handler/Post';
import { ErrorHandler } from './handler/Error';

export class RestReducer extends Reducer {
  constructor(prefix, handlers={}) {
    super(handlers);
    this.prefix = prefix.toUpperCase();

    // Register default handlers
    this.registerHandler(`${this.prefix}_FIND_FULFILLED`, new FindHandler());
    this.registerHandler(`${this.prefix}_ALL_FULFILLED`, new AllHandler());
    this.registerHandler(`${this.prefix}_GET_FULFILLED`, new GetHandler());
    this.registerHandler(`${this.prefix}_POST_FULFILLED`, new PostHandler());

    // Register default error handlers
    this.registerErrorHandler(`${this.prefix}_FIND_REJECTED`, new ErrorHandler('FIND'));
    this.registerErrorHandler(`${this.prefix}_ALL_REJECTED`, new ErrorHandler('ALL'));
    this.registerErrorHandler(`${this.prefix}_GET_REJECTED`, new ErrorHandler('GET'));
    this.registerErrorHandler(`${this.prefix}_POST_REJECTED`, new ErrorHandler('POST'));
  }
}
