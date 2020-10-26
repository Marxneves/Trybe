import { createStore, combineReducers } from 'redux';

import changeNumber from '../reducers/changeNumber';

const reducers = combineReducers({ changeNumber });

const store = createStore(reducers);
export default store;