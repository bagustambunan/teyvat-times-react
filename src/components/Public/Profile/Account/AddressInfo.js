import React from 'react';
import ButtonEdit from '../../../ButtonEdit';

export default function AddressInfo({ address }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>Address</h5>
        <div><ButtonEdit /></div>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td>Street Name</td>
            <td>{address.street}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{address.state}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{address.country}</td>
          </tr>
          <tr>
            <td>Postal Code</td>
            <td>{address.postalCode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
