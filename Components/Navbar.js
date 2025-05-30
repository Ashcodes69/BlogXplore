import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            BlogXplore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className="nav-link active"
                  aria-current="page"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
