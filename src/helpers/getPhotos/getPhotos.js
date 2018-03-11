import unsplash from '../unsplash/unsplash';

const getPhotos = async currentPhotoLength => {
  try {
    const photoLength = currentPhotoLength ? currentPhotoLength : 0;
    const photoStart = photoLength + 1;

    const fetchedPhotos = await unsplash.photos.listPhotos(photoStart, 6, 'popular');
    const jsonPhotos = await fetchedPhotos.json();

    return jsonPhotos;
  } catch (error) {
    throw Error(`Error retrieving photos from Unsplash: ${error}`);
  }
};

export default getPhotos;
