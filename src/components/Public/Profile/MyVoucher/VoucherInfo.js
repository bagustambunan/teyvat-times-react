import React from 'react';
import VoucherItem from './VoucherItem';
import TitleSection from '../TitleSection';

export default function VoucherInfo({ vouchers }) {
  const activeVouchers = vouchers.filter((item) => item.isActive());
  const nonActiveVouchers = vouchers.filter((item) => !item.isActive());
  return (
    <>
      <div className="mb-5">
        <TitleSection text="Active Vouchers" />
        {activeVouchers.length > 0 ? (
          activeVouchers.map((voucher, i) => (
            <VoucherItem voucher={voucher} i={i + 1} key={voucher.userVoucherID} />
          ))
        ) : (
          <div className="alert alert-secondary">No data</div>
        )}
      </div>
      <div>
        <TitleSection text="Used / Expired Vouchers" />
        {nonActiveVouchers.length > 0 ? (
          nonActiveVouchers.map((voucher, i) => (
            <VoucherItem voucher={voucher} i={i + 1} key={voucher.userVoucherID} />
          ))
        ) : (
          <div className="alert alert-secondary">No data</div>
        )}
      </div>
    </>
  );
}
