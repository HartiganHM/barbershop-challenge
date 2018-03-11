const photos = (store = [], action) => {
  switch (action.type) {
  case 'PHOTOS_TO_STORE':
    const newStore = [...store, ...action.photos];

    return newStore;

  default:
    return store;
  }
};

export default photos;