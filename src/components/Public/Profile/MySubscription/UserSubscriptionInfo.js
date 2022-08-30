import React from 'react';

export default function UserSubscriptionInfo({ activeSub }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Active Subscription</h5>
      </div>

      {activeSub === null ? (
        <div className="alert alert-secondary" role="alert">
          You have no active subscription
        </div>
      ) : (
        <div className="alert alert-primary" role="alert">
          Active until
          {' '}
          {activeSub.getDateEnded()}
        </div>
      )}
    </div>
  );
}
