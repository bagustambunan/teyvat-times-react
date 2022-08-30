export default class User {
  constructor(
    userID,
    role,
    username,
    email,
    name,
    phone,
    address,
    profilePic,
  ) {
    this.userID = userID;
    this.role = role;
    this.username = username;
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.profilePic = profilePic;
  }
}
