import unsplash from '../unsplash/unsplash';

const getPhotos = async () => {
  try {
    const fetchedPhotos = await unsplash.photos.listPhotos(1, 6, "popular");
    const jsonPhotos = await fetchedPhotos.json();
    console.log(jsonPhotos)
    return jsonPhotos
  } catch (error) {
    throw Error(`Error retrieving photos from Unsplash: ${error}`)
  }
}

export default getPhotos;