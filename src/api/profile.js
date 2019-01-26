import session from './session';

export default {
  createProfile(content, media) {
    return session.post('/profile/', { content, media });
  },
  updateProfile() {
    return session.patch('/profile/', {data});
  },
   getProfile() {
    return session.get('/profile/');
  },


};