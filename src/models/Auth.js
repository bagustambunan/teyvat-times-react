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
    this.user = user;
  }

  authorizeInternal() {
    if (this.user.role.roleID === 1) {
      return true;
    }
    return false;
  }

  authorizePublic() {
    if (this.user.role.roleID === 1 || this.user.role.roleID === 2) {
      return true;
    }
    return false;
  }
}
