import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    composeEnhancers(
      applyMiddleware(
      )
    )
  );

  // sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;