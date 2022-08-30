import React from 'react';
import { ParseCurrency } from '../../../helpers/Parser';

export default function VoucherRow({ voucher, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>
        {voucher.name}
      </td>
      <td>
        {ParseCurrency(voucher.amount)}
      </td>
      <td>
        {voucher.code}
      </td>
    </tr>
  );
}
