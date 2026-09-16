import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-light text-dark border-top mt-5">
      {/* ================= FOOTER MAIN ================= */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Website Info */}
          <div className="col-12 col-md-5">
            <h3 className="fw-bold mb-3">Nexora</h3>

            <p className="text-secondary mb-3">
              A simple collection of practical web projects built using React,
              Bootstrap and API integration.
            </p>

            <span className="badge text-bg-warning px-3 py-2">
              React Mini Projects
            </span>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-sm-6 col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/Crud" className="text-secondary text-decoration-none">
                  Student Details
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/Moviecard"
                  className="text-secondary text-decoration-none">
                  Moviecard
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/Product"
                  className="text-secondary text-decoration-none">
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/Electronics"
                  className="text-secondary text-decoration-none"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="col-12 col-sm-7 col-md-4">
            <h6 className="fw-bold mb-3">Projects</h6>

            <div className="row">
              <div className="col-12 col-lg-7">
                <p className="text-secondary mb-2">Student Management</p>

                <p className="text-secondary mb-2">Product Management</p>
              </div>

              <div className="col-12 col-lg-7">
                <p className="text-secondary mb-2">Electronics Products</p>

                <p className="text-secondary mb-0">REST API Practice</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="border-top">
        <div className="container py-3">
          <div className="row align-items-center g-2">
            <div className="col-12 col-md-6 text-center text-md-start">
              <small className="text-secondary">
                © 2026 Nexora. All rights reserved.
              </small>
            </div>

            <div className="col-12 col-md-6 text-center text-md-end">
              <small className="text-secondary">
                Built with React & Bootstrap
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
