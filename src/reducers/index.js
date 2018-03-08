import { combineReducers } from 'redux';
import photos from './photos/photos';
import currentView from './currentView/currentView';

const rootReducer = combineReducers({
  currentView,
  photos
});

export default rootReducer;
