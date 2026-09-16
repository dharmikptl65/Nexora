import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("signupUser");

    if (user) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
    };

    localStorage.setItem(
      "signupUser",
      JSON.stringify(userData)
    );

    alert(`Welcome ${firstName} ${lastName}!`);

    navigate("/");
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="row w-100 justify-content-center">

        {/* Signup Form Width */}
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">

          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

            {/* Signup Image */}
            <img
              src="https://cdn.21st.dev/assets/mirror/34/34deb6335ecf73e9008dc9907d50b9a2874b44f2bcbe233f4aa77e24da9ab071.png"
              alt="Signup"
              className="img-fluid w-100"
              style={{
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div className="card-body p-4 p-md-5">

              {/* Heading */}
              <div className="text-center mb-4">
                <h1 className="fw-bold mb-2">
                  Create Account
                </h1>

                <p className="text-secondary mb-0">
                  Sign up to continue
                </p>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit}>

                {/* First Name */}
                <div className="mb-3">
                  <label
                    htmlFor="firstName"
                    className="form-label fw-semibold"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    className="form-control form-control-lg"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="form-label fw-semibold"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    className="form-control form-control-lg"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                {/* Sign Up Button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Sign Up
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;
