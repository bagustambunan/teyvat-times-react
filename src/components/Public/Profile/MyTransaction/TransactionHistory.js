import React from 'react';
import Pagination from '../../../Pagination';
import TitleSection from '../TitleSection';
import TransactionRow from './TransactionRow';

export default function TransactionHistory({ transactions, pagination, changePage }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <TitleSection text="My Transaction History" />
      </div>

      {transactions.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Subscription</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, i) => (
                <TransactionRow
                  transaction={transaction}
                  i={i + 1}
                  key={transaction.transactionID}
                />
              ))}
            </tbody>
          </table>
          <Pagination pagination={pagination} changePage={changePage} />
        </>
      ) : (
        <div className="alert alert-secondary">
          No data
        </div>
      )}
    </div>
  );
}
