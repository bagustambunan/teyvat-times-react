import { ParseCurrency } from '../helpers/Parser';

export default class UserSpending {
  constructor(
    userName,
    totalSpending,
  ) {
    this.userName = userName;
    this.totalSpending = totalSpending;
  }

  getTotalSpending() {
    return ParseCurrency(this.totalSpending);
  }
}
