import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column p-3 bg-light h-100 admin-menu">
      <NavLink
        to="/admin"
        className="fs-4 d-flex link-dark text-decoration-none"
      >
        Admin Nemesis
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column">

        <li className="nav-item">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            <i className="bi bi-house me-2"></i>
            Dashboard
          </button>
          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled small">
              <li><NavLink to="/admin/dashboard" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Dashboard</NavLink></li>
              <li><NavLink to="/" target="_blank" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Main blog</NavLink></li>
              <li><NavLink to="/profile" target="_blank" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Profile</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#post-collapse" aria-expanded="false">
            <i className="bi bi-newspaper me-2"></i>
            Posts
          </button>
          <div className="collapse" id="post-collapse">
            <ul className="btn-toggle-nav list-unstyled small">
              <li><NavLink to="/admin/posts" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>All posts</NavLink></li>
              <li><NavLink to="/admin/tiers" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Tiers</NavLink></li>
              <li><NavLink to="/admin/categories" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Categories</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#subscription-collapse" aria-expanded="false">
            <i className="bi bi-card-list me-2"></i>
            Subscriptions
          </button>
          <div className="collapse" id="subscription-collapse">
            <ul className="btn-toggle-nav list-unstyled small">
              <li><NavLink to="/" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Subscriptions</NavLink></li>
              <li><NavLink to="/" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Transactions</NavLink></li>
              <li><NavLink to="/" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Vouchers</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#gift-collapse" aria-expanded="false">
          <i className="bi bi-gift me-2"></i>
            Gifts
          </button>
          <div className="collapse" id="gift-collapse">
            <ul className="btn-toggle-nav list-unstyled small">
              <li><NavLink to="/" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Gifts</NavLink></li>
              <li><NavLink to="/" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Gift claims</NavLink></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <NavLink to="/logout" className="nav-link link-dark">
            <i className="bi bi-arrow-bar-left me-2"></i>
            Logout
          </NavLink>
        </li>

      </ul>
    </div>
  )
}
