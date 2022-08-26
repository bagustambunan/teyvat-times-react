import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 border-end border-2">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink to="/profile/account" className="nav-link link-dark">
            <i className="bi bi-person me-2" />
            Account
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/mysubscription" className="nav-link link-dark">
            <i className="bi bi-card-list me-2" />
            My Subscription
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/myvoucher" className="nav-link link-dark">
            <i className="bi bi-ticket-perforated me-2" />
            My Voucher
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/myreferral" className="nav-link link-dark">
            <i className="bi bi-link-45deg me-2" />
            My Referral
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/mygift" className="nav-link link-dark">
            <i className="bi bi-gift me-2" />
            My Gift
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/logout" className="nav-link link-dark">
            <i className="bi bi-arrow-bar-left me-2" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
