import React from 'react'
import { ParseCurrency } from '../../../../helpers/Parser';
import TitleSection from '../TitleSection';

export default function MySpending({ spending }) {
  return (
    <div className="mb-5">
      <TitleSection text="Total Spending" />
      <div className="alert alert-info">
        {spending.getTotalSpending()}
      </div>
    </div>
  )
}
