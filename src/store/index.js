import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerCategories from './categories';
import reducerProducts from './products';
import reducerCart from './cart';

const reducers = combineReducers({ Categories: reducerCategories, Products: reducerProducts, Cart:reducerCart  });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();