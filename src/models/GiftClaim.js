export default class GiftClaim {
  constructor(giftClaimID, user, address, status, giftClaimItems) {
    this.giftClaimID = giftClaimID;
    this.user = user;
    this.address = address;
    this.status = status;
    this.giftClaimItems = giftClaimItems;
  }
}
