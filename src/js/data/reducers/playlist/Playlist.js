import { Handler } from '../../../lib/data/Handler';
import { RestReducer } from '../../../lib/data/rest/RestReducer';
import { RecentHandler } from './handler/Recent';
import { PopularHandler } from './handler/Popular';

const reducer = new RestReducer('PLAYLIST');

// Add some more handlers
reducer.registerHandler('PLAYLIST_RECENT_FULFILLED', new RecentHandler());
reducer.registerHandler('PLAYLIST_POPULAR_FULFILLED', new PopularHandler());

export default reducer;
