import { ParseDateTime } from "../helpers/Parser";

export default class UserPostActivity {
  constructor(
    userPostActivityID,
    user,
    post,
    isLiked,
    isShared,
    viewsCount,
    createdAt,
    updatedAt,
  ) {
    this.userPostActivityID = userPostActivityID;
    this.user = user;
    this.post = post;
    this.isLiked = isLiked;
    this.isShared = isShared;
    this.viewsCount = viewsCount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  getFirstReadDate() {
    return ParseDateTime(this.createdAt);
  }
  getLastReadDate() {
    return ParseDateTime(this.updatedAt);
  }
}
