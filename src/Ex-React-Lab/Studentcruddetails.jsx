import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function Studentcruddetails() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const apiurl = "https://6aa2813bccb3db9689a68d61.mockapi.io/studentdata/" + id;

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        setData([res]);
      });
  }, [id]);

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <div className="container pt-4 pb-3">
        <div className="text-center">
          <span className="text-primary fw-bold small">STUDENT MANAGEMENT</span>

          <h2 className="fw-bold mt-2 mb-2">Student Details</h2>

          <p className="text-secondary mb-0">
            Complete information about the selected student.
          </p>
        </div>
      </div>

      {/* ================= STUDENT DETAILS ================= */}
      <div className="container pb-5">
        {data.map((stu) => {
          return (
            <div
              className="card shadow-sm border-0 overflow-hidden"
              key={stu.id}
            >
              <div className="row g-0">
                {/* ================= IMAGE ================= */}
                <div className="col-12 col-md-5">
                  <img
                    src={stu.image}
                    className="w-100 student-detail-image"
                    alt={stu.studentName}
                  />
                </div>

                {/* ================= DETAILS ================= */}
                <div className="col-12 col-md-7">
                  <div className="card-body p-3 p-md-4">
                    <h3 className="fw-bold mb-3">{stu.studentName}</h3>

                    <div className="row g-2 g-md-3">
                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">Student Name</small>
                          <p className="fw-semibold mb-0">{stu.studentName}</p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">Roll No</small>
                          <p className="fw-semibold mb-0">{stu.rollNo}</p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">Enrollment</small>
                          <p className="fw-semibold mb-0">{stu.enroll}</p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">Subject</small>
                          <p className="fw-semibold mb-0">{stu.subject}</p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">SPI</small>
                          <p className="fw-semibold mb-0">{stu.spi}</p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">Phone</small>
                          <p className="fw-semibold mb-0">{stu.phone}</p>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="student-detail-item">
                          <small className="text-secondary">Address</small>
                          <p className="fw-semibold mb-0">{stu.address}</p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="student-detail-item">
                          <small className="text-secondary">City</small>
                          <p className="fw-semibold mb-0">{stu.city}</p>
                        </div>
                      </div>
                    </div>

                    {/* BACK BUTTON */}
                    <div className="mt-3">
                      <Link to="/Crud" className="btn btn-primary">
                        <i className="fa-solid fa-arrow-left me-2"></i>
                        Back to Students
                      </Link>

                      <button className="btn btn-danger ms-2" onClick={() => {
                        fetch(apiurl,{method:"DELETE"})
                        .then((res)=>res.json())
                        .then((res)=>{
                          alert("Are you sure you want to delete this student?");
                          navigate("/Crud");
                        });
                      }}>
                        Delete
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Studentcruddetails;
