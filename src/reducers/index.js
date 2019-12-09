import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = () => combineReducers({
  router: connectRouter(),
});

export default createRootReducer;
