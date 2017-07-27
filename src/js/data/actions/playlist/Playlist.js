import { RestActions } from '../../../lib/data/rest/RestActions';
import { PopularAction } from './action/Popular';
import { RecentAction } from './action/Recent';

const actions = new RestActions('PLAYLIST', 'ugh/blahh');

// Add some more actions
actions.registerAction('RECENT', new RecentAction());
actions.registerAction('POPULAR', new PopularAction());

export default actions;
