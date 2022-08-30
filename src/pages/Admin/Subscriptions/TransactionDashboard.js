import React from 'react';
import TitleSection from '../../../components/Admin/TitleSection';
import TransactionTable from '../../../components/Admin/Transaction/Table/TransactionTable';

export default function TransactionDashboard() {
  return (
    <>
      <TitleSection title="Transactions" icon="bi-credit-card" />
      <TransactionTable />
    </>
  )
}
