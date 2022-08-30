import React from 'react';
import TitleSection from '../TitleSection';

export default function UserSubscriptionInfo({ activeSub }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <TitleSection text="Active Subscription" />
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
