export default class Post {
  constructor(
    postID,
    postTier,
    postCategory,
    title,
    content,
    slug,
    summary,
    imgThumbnail,
    imgContent,
    createdBy,
    updatedBy,
    createdAt,
    updatedAt,
    totalLike,
    totalShare,
  ) {
    this.postID = postID;
    this.postTier = postTier;
    this.postCategory = postCategory;
    this.title = title;
    this.content = content;
    this.slug = slug;
    this.summary = summary;
    this.imgThumbnail = imgThumbnail;
    this.imgContent = imgContent;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.totalLike = totalLike;
    this.totalShare = totalShare;
  }

  getCreatedAt() {
    const d = new Date(this.createdAt);
    return `${d.toDateString()} ${d.toLocaleTimeString()}`;
  }

  getUpdatedAt() {
    const d = new Date(this.updatedAt);
    return `${d.toDateString()} ${d.toLocaleTimeString()}`;
  }
}
