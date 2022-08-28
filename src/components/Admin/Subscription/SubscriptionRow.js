import React from 'react'
import { NavLink } from 'react-router-dom'
import { ParseCurrency } from '../../../helpers/Parser'

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
        {subscription.coinsAmount}
      </td>
    </tr>
  )
}
