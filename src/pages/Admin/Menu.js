import React from "react";

export default function Menu() {
  return (
    <div class="d-flex flex-column p-3 bg-light h-100 admin-menu">
      <a
        href="/"
        class="fs-4 d-flex link-dark text-decoration-none"
      >
        Admin Nemesis
      </a>
      <hr />
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <a href="#" class="nav-link active">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-dark">
            Posts
          </a>
        </li>
      </ul>
      <hr />
      <div class="dropdown admin-menu-user">
        <a
          href="#"
          class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            class="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser"
        >
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
