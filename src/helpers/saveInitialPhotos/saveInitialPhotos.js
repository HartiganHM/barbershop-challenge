const saveInitialPhotos = photos => {
  localStorage.setItem('hh-barbershop3', JSON.stringify(photos));
};

export default saveInitialPhotos;
