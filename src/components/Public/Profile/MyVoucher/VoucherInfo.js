import React from "react";
import VoucherItem from "./VoucherItem";
import TitleSection from "../TitleSection";

export default function VoucherInfo({ vouchers }) {
  console.log(vouchers);
  return (
    <div>
      <TitleSection text="My Vouchers" />
      {
        vouchers.length > 0 ?
          vouchers.map((voucher, i) => (
            <VoucherItem
              voucher={voucher}
              i={i + 1}
              key={voucher.voucherID}
            />
          )) :
        (
        <div className="alert alert-secondary">
          No data
        </div>
        )
      }
    </div>
  );
}
