export default class Voucher {
  constructor(
    voucherID,
    name,
    description,
    image,
    amount,
    code,
  ) {
    this.voucherID = voucherID;
    this.name = name;
    this.description = description;
    this.image = image;
    this.amount = amount;
    this.code = code;
  }
}
