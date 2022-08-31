import React from 'react';
import Pagination from '../../../Pagination';
import TitleSection from '../TitleSection';
import UserSubscriptionRow from './UserSubscriptionRow';

export default function UserSubscriptionHistory({ userSubscriptions, pagination, changePage }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <TitleSection text="My Subscription History" />
      </div>

      {userSubscriptions.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Subscription</th>
                <th scope="col">Date start</th>
                <th scope="col">Date ended</th>
              </tr>
            </thead>
            <tbody>
              {userSubscriptions.map((userSub, i) => (
                <UserSubscriptionRow
                  userSub={userSub}
                  i={i + 1}
                  key={userSub.userSubscriptionID}
                />
              ))}
            </tbody>
          </table>
          <Pagination pagination={pagination} changePage={changePage} />
        </>
      ) : (
        <div className="alert alert-secondary" role="alert">
          No data
        </div>
      )}
    </div>
  );
}