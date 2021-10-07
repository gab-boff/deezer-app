import { createStore, combineReducers } from 'redux';

import SearchReducer from '../reducers/Search.reducer';

const rootReducer = combineReducers({
  search: SearchReducer,
});

const store = createStore(rootReducer);

export default store;