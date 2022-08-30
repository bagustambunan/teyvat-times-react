import React from 'react';
import SubscriptionItem from './SubscriptionItem';

export default function SubscriptionWrapper({ subscriptions }) {
  return (
    <div className="bg-white border rounded p-5">
      <h4 className="mb-3">Buy subscription</h4>
      <div className="d-flex">
        {subscriptions.map((subscription) => (
          <SubscriptionItem subscription={subscription} key={subscription.subscriptionID} />
        ))}
      </div>
    </div>
  );
}
