import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Crud() {
  const [data, setData] = useState([]);

  const apiurl =
    "https://6aa2813bccb3db9689a68d61.mockapi.io/studentdata";

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      {/* ================= PAGE TITLE ================= */}

      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="text-primary fw-bold small">
            STUDENT MANAGEMENT
          </span>

          <h2 className="fw-bold mt-2">Student List</h2>

          <p className="text-secondary mb-0">
            View student information and explore individual details.
          </p>
        </div>

        {/* ================= STUDENT CARDS ================= */}

        <div className="row g-4">
          {data.map((stu) => {
            return (
              <div className="col-6 col-lg-3" key={stu.id}>
                <div className="card h-100 shadow-sm border-0 overflow-hidden">

                  {/* ================= IMAGE ================= */}

                  <img
                    src={stu.image}
                    className="card-img-top"
                    alt={stu.studentName}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  {/* ================= CARD BODY ================= */}

                  <div className="card-body d-flex flex-column p-3 p-md-4">

                    <h5 className="card-title fw-bold mb-3">
                      {stu.studentName}
                    </h5>

                    <div className="mb-3">
                      <p className="mb-2 text-secondary">
                        <strong className="text-dark">
                          Roll No:{" "}
                        </strong>
                        {stu.rollNo}
                      </p>

                      <p className="mb-2 text-secondary">
                        <strong className="text-dark">
                          Subject:{" "}
                        </strong>
                        {stu.subject}
                      </p>
                    </div>

                    {/* ================= MORE INFO ================= */}

                    <Link
                      to={"/StudentDetails/" + stu.id}
                      className="btn btn-primary w-100 mt-auto"
                    >
                      More Info
                    </Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Crud;