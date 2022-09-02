import React from 'react';
import GiftClaimStatusSelect from './GiftClaimStatusSelect';

export default function TableController({ form, handleChange }) {
  return (
    <section className="row my-3">
      <div className="col-12 col-md-6">
        <GiftClaimStatusSelect value={form.status} handleChange={handleChange} />
      </div>

      <div className="col-12 col-md-6" />
    </section>
  );
}
