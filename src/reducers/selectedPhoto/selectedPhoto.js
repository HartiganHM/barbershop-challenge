const selectedPhoto = (store = {}, action) => {
  switch (action.type) {
  case 'SET_SELECTED_PHOTO':
    return action.selectedPhoto;

  default:
    return store;
  }
};

export default selectedPhoto;