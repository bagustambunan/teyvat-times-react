export default class Auth {
  constructor(token, user) {
    this.token = token;
    this.user = user;
  }

  getToken() {
    return this.token;
  }
  getUser() {
    return this.user;
  }
  setToken(token) {
    this.token = token;
  }
  setUser(user) {
    this.setUser = user;
  }
  
  authorizeInternal() {
    if (this.user.roleID !== 1) {
      return false;
    }
    return true;
  }
  authorizePublic() {
    if (this.token !== '') {
      return false
    }
    return true;
  }

}