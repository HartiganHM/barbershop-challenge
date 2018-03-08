import Unsplash from 'unsplash-js';
import unsplashCredentials from '../../unsplashCredentials';

const unsplash = new Unsplash({
  applicationId: unsplashCredentials.APPLICATION_ID,
  secret: unsplashCredentials.SECRET,
  callbackUrl: unsplashCredentials.CALLBACK_URL
});

export default unsplash;