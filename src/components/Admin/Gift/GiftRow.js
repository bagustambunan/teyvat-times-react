import React from 'react';
import { NavLink } from 'react-router-dom';

export default function GiftRow({ gift, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>
        {gift.name}
      </td>
      <td>
        {gift.stock}
      </td>
      <td>
        <NavLink
          to={`/admin/gifts/${gift.giftID}/edit`}
          className="btn btn-sm"
        >
          <i className="text-warning bi bi-pencil-fill" />
        </NavLink>
      </td>
    </tr>
  );
}
