import React from 'react';
import { NavLink } from 'react-router-dom';
import { ParseDateTime } from '../../../../helpers/Parser';
import GiftItem from '../../../Public/Profile/MyGift/GiftItem';

export default function TransactionRow({ claim, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>Date</td>
      <td>{claim.user.name}</td>
      <td className="d-flex gap-2">
        {
          claim.giftClaimItems.map((claimItem) => (
            <GiftItem gift={claimItem.gift} key={claimItem.giftClaimItemID} />
          ))
        }
      </td>
      <td>{claim.status.name}</td>
      <td>
        ACTION
      </td>
    </tr>
  );
}
