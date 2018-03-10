const currentView = (store = 'List', action) => {
  switch (action.type) {
  case 'CHANGE_VIEW':
    return action.selectedView;

  default:
    return store;
  }
};

export default currentView;