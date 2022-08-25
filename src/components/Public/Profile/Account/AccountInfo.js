import React from "react";
import { NavLink } from "react-router-dom";
import ButtonEdit from "../../../ButtonEdit";

export default function AccountInfo({ user }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>General Information</h5>
        <NavLink to="/profile/account/edit/general">
          <ButtonEdit />
        </NavLink>
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
        </tbody>
      </table>
    </div>
  );
}
