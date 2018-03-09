import { combineReducers } from 'redux';
import photos from './photos/photos';
import currentView from './currentView/currentView';
import selectedPhoto from './selectedPhoto/selectedPhoto';

const rootReducer = combineReducers({
  currentView,
  photos,
  selectedPhoto
});

export default rootReducer;
