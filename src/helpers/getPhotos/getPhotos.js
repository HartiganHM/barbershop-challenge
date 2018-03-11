import unsplash from '../unsplash/unsplash';

const getPhotos = async currentPhotoLength => {
  try {
    const photoStart = currentPhotoLength + 1;
    const photoEnd = currentPhotoLength + 6;
    const fetchedPhotos = await unsplash.photos.listPhotos(photoStart, photoEnd, 'popular');
    const jsonPhotos = await fetchedPhotos.json();

    return jsonPhotos;
  } catch (error) {
    throw Error(`Error retrieving photos from Unsplash: ${error}`);
  }
};

export default getPhotos;
