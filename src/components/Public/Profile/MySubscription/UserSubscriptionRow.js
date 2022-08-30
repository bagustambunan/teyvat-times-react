import React from 'react';

export default function UserSubscriptionRow({ userSub, i }) {
  return (
    <tr>
      <td>{i}</td>
      <td>{userSub.subscription.name}</td>
      <td>{userSub.getDateStart()}</td>
      <td>{userSub.getDateEnded()}</td>
    </tr>
  );
}
