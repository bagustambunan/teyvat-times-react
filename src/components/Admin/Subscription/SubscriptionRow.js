import React from 'react';
import { ParseCurrency } from '../../../helpers/Parser';

export default function SubscriptionRow({ subscription, i }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>
        {subscription.name}
      </td>
      <td>
        {ParseCurrency(subscription.price)}
      </td>
      <td>
        {subscription.moraAmount}
      </td>
    </tr>
  );
}
