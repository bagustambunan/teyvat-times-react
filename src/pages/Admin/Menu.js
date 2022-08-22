import React from "react";

export default function Menu() {
  return (
    <div className="d-flex flex-column p-3 bg-light h-100 admin-menu">
      <a
        href="/"
        className="fs-4 d-flex link-dark text-decoration-none"
      >
        Admin Nemesis
      </a>
      <hr />
      <ul className="nav nav-pills flex-column">

        <li className="nav-item">
          <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
            <i className="bi bi-house me-2"></i>
            Home
          </button>
          <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled small">
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Home</a></li>
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Profile</a></li>
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
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>All posts</a></li>
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Tiers</a></li>
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Categories</a></li>
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
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Subscriptions</a></li>
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Transactions</a></li>
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Vouchers</a></li>
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
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Gifts</a></li>
              <li><a href="#" className="nav-link link-dark rounded"><i className="bi bi-chevron-right me-2"></i>Gift claims</a></li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <a href="/logout" className="nav-link link-dark">
            <i className="bi bi-arrow-bar-left me-2"></i>
            Logout
          </a>
        </li>

      </ul>
    </div>
  );
}
