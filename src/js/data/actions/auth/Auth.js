import { RestActions } from '../../../lib/data/rest/RestActions';

const actions = new RestActions('AUTH', 'http://localhost:8090/api/auth');

export default actions;
