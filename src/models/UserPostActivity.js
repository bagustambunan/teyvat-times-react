export default class UserPostActivity {
  constructor(
    userPostActivityID,
    user,
    post,
    isLiked,
    isShared,
    viewsCount,
  ) {
    this.userPostActivityID = userPostActivityID;
    this.user = user;
    this.post = post;
    this.isLiked = isLiked;
    this.isShared = isShared;
    this.viewsCount = viewsCount;
  }
}
