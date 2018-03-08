import { combineReducers } from 'redux';
import photosReducers from './photosReducers/photosReducers';
import currentView from './currentView/currentView';

const rootReducer = combineReducers({
  currentView,
  photos: photosReducers
});

export default rootReducer;
