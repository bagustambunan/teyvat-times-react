import React from 'react';
import SubscriptionRow from './SubscriptionRow';

export default function SubscriptionTable({ subscriptions }) {
  return (
    <table className="table table-striped w-100 my-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Subscription</th>
          <th scope="col">Price</th>
          <th scope="col">Mora Amount</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((subscription, index) => (
          <SubscriptionRow
            key={subscription.subscriptionID}
            subscription={subscription}
            i={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
}
