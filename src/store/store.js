import { createStore, combineReducers } from 'redux';

import SearchReducer from '../reducers/Search.reducer';
import FavoriteReducer from '../reducers/Favorite.reducer';

const rootReducer = combineReducers({
  search: SearchReducer,
  favorite: FavoriteReducer,
});

const store = createStore(rootReducer);

export default store;