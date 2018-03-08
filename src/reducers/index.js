import { combineReducers } from 'redux';
import photosReducers from './photosReducers/photosReducers';

const rootReducer = combineReducers({
  photos: photosReducers
});

export default rootReducer;
