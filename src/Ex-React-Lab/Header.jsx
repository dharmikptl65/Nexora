import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const user = localStorage.getItem("signupUser");

  const handleLogout = () => {
    localStorage.removeItem("signupUser");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid px-4">

          {/* ================= LOGO ================= */}

          <Link
            className="navbar-brand d-flex align-items-center gap-2 fw-bold"
            to="/"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/12509/12509272.png"
              alt="Nexora"
              width="30"
              height="30"
            />

            Nexora
          </Link>


          {/* ================= MOBILE TOGGLE ================= */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* ================= NAVIGATION ================= */}

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav align-items-lg-center w-100">

              {/* Empty Space */}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                >
                </Link>
              </li>


              {/* ================= MOVIECARD ================= */}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Moviecard"
                >
                  Moviecard
                </Link>
              </li>


              {/* ================= CRUD ================= */}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Crud"
                >
                  Crud
                </Link>
              </li>


              {/* ================= MORE DROPDOWN ================= */}

              <li className="nav-item dropdown">

                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More item's
                </a>

                <ul className="dropdown-menu">

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Electronics"
                    >
                      Electronics
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Food"
                    >
                      Food
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>

                </ul>

              </li>


              {/* ================= RIGHT SIDE ================= */}

              <li className="nav-item ms-lg-auto mt-2 mt-lg-0">

                <div className="d-flex align-items-center gap-3">

                  {/* ================= USER ICON ================= */}

                  <Link
                    className="nav-link p-0"
                    to={user ? "#" : "/Signup"}
                    aria-label={user ? "User Profile" : "Sign Up"}
                  >
                    <i
                      className="fa-regular fa-xl fa-user"
                      style={{
                        color: "rgb(162, 162, 162)",
                      }}
                    />
                  </Link>


                  {/* ================= LOGOUT ================= */}

                  {user && (
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}

                </div>

              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Header;
