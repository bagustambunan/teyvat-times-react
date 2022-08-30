import React from 'react';
import ButtonEdit from '../../../ButtonEdit';
import Mora from '../../../Mora';
import TitleSection from '../TitleSection';

export default function AccountInfo({ user }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <TitleSection text="General Information" />
        <div>
          <ButtonEdit />
        </div>
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <td>Referral Code</td>
            <td>{user.referralCode}</td>
          </tr>
          <tr>
            <td>Mora</td>
            <td><Mora amount={user.mora} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
