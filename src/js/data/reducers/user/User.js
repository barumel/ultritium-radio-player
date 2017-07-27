import { Reducer } from '../../../lib/data/Reducer';
import { Handler } from '../../../lib/data/Handler';


const handlers = {
  USER_LOGGED_IN: new Handler((state={}, action) => {
    console.log('USER LOGGED IN');
    return {name: 'Hans', email: 'hans@wurst'};
  }),
  USER_LOGGED_OUT: new Handler((state, action) => {
    console.log('USER LOGGED OUT');
    return null;
  }),
  USER_CHANGED: new Handler((state, action) => {
    console.log('USER HAS CHANGED', state);
    return {name: 'Horst', email: 'horst@wurst'};
  }),
  USERS_FETCHED: new Handler((state, action) => {
    console.log('USERS FETCHED');
    return [];
  })
}

const reducer = new Reducer(handlers);

export default reducer;
