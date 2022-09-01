import React from 'react'
import Pagination from '../Pagination';
import ReadHistoryCard from './ReadHistoryCard';

export default function ReadHistory({ activities, pagination, changePage }) {
  return (
    <section className="container bg-white rounded p-4 shadow border">
      <div className="row">
        {activities.map((activity) => (
          <ReadHistoryCard activity={activity} />
        ))}
      </div>

      <Pagination pagination={pagination} changePage={changePage} />
    </section>
  );
}
