import { RestActions } from '../../../lib/data/rest/RestActions';

const actions = new RestActions('USER', 'http://localhost:8090/api/user');

export default actions;
