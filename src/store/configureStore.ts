import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from './reducers';

const configureStore = () => {
  const store = createStore(
    appReducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
  return store;
}
export default configureStore;
