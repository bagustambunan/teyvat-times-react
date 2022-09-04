import { ParseDate } from '../helpers/Parser';

export default class UserVoucher {
  constructor(
    userVoucherID,
    userID,
    voucher,
    dateExpired,
    isUsed,
  ) {
    this.userVoucherID = userVoucherID;
    this.userID = userID;
    this.voucher = voucher;
    this.dateExpired = dateExpired;
    this.isUsed = isUsed;
  }

  getDateExpired() {
    return ParseDate(this.dateExpired);
  }

  isActive() {
    return this.isUsed === 0;
  }
}
