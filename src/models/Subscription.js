export default class Subscription {
  constructor(
    subscriptionID,
    name,
    price,
    coinsAmount,
  ) {
    this.subscriptionID = subscriptionID;
    this.name = name;
    this.price = price;
    this.coinsAmount = coinsAmount;
  }
}
