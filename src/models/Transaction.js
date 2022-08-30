export default class Transaction {
  constructor(
    transactionID,
    user,
    subscription,
    status,
    grossTotal,
    netTotal,
    userVoucher,
    createdAt,
  ) {
    this.transactionID = transactionID;
    this.user = user;
    this.subscription = subscription;
    this.status = status;
    this.grossTotal = grossTotal;
    this.netTotal = netTotal;
    this.userVoucher = userVoucher;
    this.createdAt = createdAt;
  }
}
