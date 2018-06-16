

const AVATAR_KEY = 'avatar';
const USERNAME_KEY = 'username';

class StorageService {
  saveAvatar(avatar) {
    return localStorage.setItem(AVATAR_KEY, avatar);
  }
  
  saveUsername(username) {
    return localStorage.setItem(USERNAME_KEY, username);
  }
  
  getItems() {
    const avatar = localStorage.getItem(AVATAR_KEY);
    const username = localStorage.getItem(USERNAME_KEY);
    return {
      avatar,
      username
    };
  }
}

export default new StorageService();