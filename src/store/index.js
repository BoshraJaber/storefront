import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerCategories from './categories';
import reducerProducts from './products';

const reducers = combineReducers({ Categories: reducerCategories, Products: reducerProducts });
// in some component state.counter.totalVotes / .candidates
const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();