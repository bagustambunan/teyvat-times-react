import React from "react";

export default function UserSubscriptionInfo({ activeSub }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Active Subscription</h5>
      </div>

      {activeSub === null ? (
        <div class="alert alert-secondary" role="alert">
          You have no active subscription
        </div>
      ) : (
        <div class="alert alert-primary" role="alert">
          {activeSub.getDateEnded()}
        </div>
      )}
    </div>
  );
}
