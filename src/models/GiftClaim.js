import { ParseDateTime } from "../helpers/Parser";

export default class GiftClaim {
  constructor(giftClaimID, user, address, status, createdAt, updatedAt, giftClaimItems) {
    this.giftClaimID = giftClaimID;
    this.user = user;
    this.address = address;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.giftClaimItems = giftClaimItems;
  }
  getCreatedAt() {
    return ParseDateTime(this.createdAt);
  }
  getUpdatedAt() {
    return ParseDateTime(this.updatedAt);
  }
}
