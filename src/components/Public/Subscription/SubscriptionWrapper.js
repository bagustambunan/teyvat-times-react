import React from 'react';
import SubscriptionItem from './SubscriptionItem';

export default function SubscriptionWrapper({ subscriptions }) {
  return (
    <div className="bg-white border rounded p-4 shadow">
      <h4 className="mb-3 text-center">Buy subscription</h4>
      <div className="d-flex justify-content-around">
        {subscriptions.map((subscription) => (
          <SubscriptionItem subscription={subscription} key={subscription.subscriptionID} />
        ))}
      </div>
    </div>
  );
}
