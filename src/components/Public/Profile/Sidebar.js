import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="d-flex p-3 profile-sidebar">
      <ul className="nav nav-pills w-100">
        <li className="nav-item">
          <NavLink to="/profile/account" className="nav-link link-dark">
            <i className="bi bi-person me-2" />
            <span>Account</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/mytransaction" className="nav-link link-dark">
            <i className="bi bi-credit-card me-2" />
            <span>My Transaction</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/mysubscription" className="nav-link link-dark">
            <i className="bi bi-card-list me-2" />
            <span>My Subscription</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/myvoucher" className="nav-link link-dark">
            <i className="bi bi-ticket-perforated me-2" />
            <span>My Voucher</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/myreferral" className="nav-link link-dark">
            <i className="bi bi-link-45deg me-2" />
            <span>My Referral</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile/mygift" className="nav-link link-dark">
            <i className="bi bi-gift me-2" />
            <span>My Gift</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/logout" className="nav-link link-dark">
            <i className="bi bi-arrow-bar-left me-2" />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
