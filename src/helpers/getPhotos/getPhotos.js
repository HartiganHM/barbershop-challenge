import unsplash from '../unsplash/unsplash';

const getPhotos = async () => {
  try {
    const fetchedPhotos = await fetch(`https://api.unsplash.com/photos/?client_id=${unsplash.applicationId}`);
    const jsonPhotos = fetchedPhotos.json();
    return jsonPhotos
  } catch (error) {
    throw Error(`Error retrieving photos from Unsplash: ${error}`)
  }
}

export default getPhotos;