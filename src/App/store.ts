import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(reducers);

// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// )