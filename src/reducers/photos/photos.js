const photos = (store = [], action) => {
  switch (action.type) {
  case 'PHOTOS_TO_STORE':
    return action.photos;

  default:
    return store;
  }
};

export default photos;