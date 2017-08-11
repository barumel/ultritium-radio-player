import { RestActions } from '../../../lib/data/rest/RestActions';
import { PopularAction } from './action/Popular';
import { RecentAction } from './action/Recent';

const actions = new RestActions('PLAYLIST', 'http://localhost:8090/api/playlist');

// Add some more actions
actions.registerAction('RECENT', new RecentAction('http://localhost:8090/api/playlist'));
actions.registerAction('POPULAR', new PopularAction('http://localhost:8090/api/playlist'));

export default actions;
