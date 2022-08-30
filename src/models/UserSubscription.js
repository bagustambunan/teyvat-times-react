import { ParseDate } from "../helpers/Parser";

export default class UserSubscription {
    constructor(
      userSubscriptionID,
      user,
      subscription,
      dateStart,
      dateEnded
    ) {
      this.userSubscriptionID = userSubscriptionID;
      this.user = user;
      this.subscription = subscription;
      this.dateStart = dateStart;
      this.dateEnded = dateEnded;
    }
    getDateStart() {
      return ParseDate(this.dateStart);
    }
    getDateEnded() {
      return ParseDate(this.dateEnded);
    }
  }
  