import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const usePathName = () => {
    const location = useLocation();
    return location.pathname;
  };
  const pathName = usePathName();
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-4">
      <div className="container">
        <a className="fs-4 navbar-brand fw-bold" href="/home">
          Teyvat News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="me-auto" />
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={`nav-link ${pathName === "/" ? "active" : ""}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/subscription"
                  className={`nav-link ${
                    pathName === "/subscription" ? "active" : ""
                  }`}
                >
                  Subscription
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/history"
                  className={`nav-link ${
                    pathName === "/history" ? "active" : ""
                  }`}
                >
                  Reading history
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={`nav-link ${
                    pathName === "/profile" ? "active" : ""
                  }`}
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
