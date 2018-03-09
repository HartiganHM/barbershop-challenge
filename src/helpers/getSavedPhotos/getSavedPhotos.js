const getSavedPhotos = () => {
  const photos = JSON.parse(localStorage.getItem('hh-barbershop3'));
  return photos;
};

export default getSavedPhotos;
