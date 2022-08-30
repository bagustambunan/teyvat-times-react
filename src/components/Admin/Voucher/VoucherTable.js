import React from 'react';
import VoucherRow from './VoucherRow';

export default function VoucherTable({ vouchers }) {
  return (
    <table className="table table-striped w-100 my-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Voucher</th>
          <th scope="col">Amount</th>
          <th scope="col">Code</th>
        </tr>
      </thead>
      <tbody>
        {vouchers.map((voucher, index) => (
          <VoucherRow
            key={voucher.voucherID}
            voucher={voucher}
            i={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}
