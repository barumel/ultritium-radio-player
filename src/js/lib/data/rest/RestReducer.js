import { Reducer } from '../Reducer';
import { GetHandler } from './handler/Get';
import { FindHandler } from './handler/Find';
import { AllHandler } from './handler/All';
console.log(GetHandler);

export class RestReducer extends Reducer {
  constructor(prefix, handlers={}) {
    super(handlers);
    this.prefix = prefix.toUpperCase();

    // Register default handlers
    this.registerHandler(`${this.prefix}_FIND_FULFILLED`, new FindHandler());
    this.registerHandler(`${this.prefix}_ALL_FULFILLED`, new AllHandler());
    this.registerHandler(`${this.prefix}_GET_FULFILLED`, new GetHandler());
  }
}
