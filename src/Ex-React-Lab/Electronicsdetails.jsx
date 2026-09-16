import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function ElectronicsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiurl = "https://dummyjson.com/products/" + id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        console.log("Electronics Details =", res);
        setProduct(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error =", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="container py-5">
        {/* ================= TITLE ================= */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Electronics Details</h2>

          <p className="text-secondary">Explore complete product information</p>
        </div>

        {/* ================= LOADING ================= */}
        {loading ? (
          <div className="card shadow-sm">
            <div className="row g-0">
              {/* Image Skeleton */}
              <div className="col-md-5">
                <div
                  className="placeholder-glow bg-light"
                  style={{ height: "400px" }}
                >
                  <span className="placeholder w-100 h-100"></span>
                </div>
              </div>

              {/* Details Skeleton */}
              <div className="col-md-7">
                <div className="card-body p-4">
                  <h2 className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </h2>

                  <p className="placeholder-glow">
                    <span className="placeholder col-5"></span>
                  </p>

                  <p className="placeholder-glow">
                    <span className="placeholder col-10"></span>
                  </p>

                  <p className="placeholder-glow">
                    <span className="placeholder col-7"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : product ? (
          /* ================= PRODUCT DETAILS ================= */
          <div className="card shadow-sm">
            <div className="row g-0">
              {/* ================= IMAGE ================= */}
              <div className="col-md-5">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded-start w-100"
                  alt={product.title}
                  style={{
                    height: "100%",
                    minHeight: "400px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* ================= DETAILS ================= */}
              <div className="col-md-7">
                <div className="card-body p-4">
                  {/* Product Name */}
                  <h2 className="card-title fw-bold mb-3">{product.title}</h2>

                  {/* Category */}
                  <span className="badge text-bg-light border mb-3">
                    {product.category}
                  </span>

                  {/* Brand */}
                  <p className="mb-3">
                    <strong>Brand:</strong> {product.brand}
                  </p>

                  {/* Rating */}
                  <div className="mb-3">
                    <span className="badge text-bg-warning">
                      <i className="bi bi-star-fill me-1"></i>
                      {product.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <h3 className="text-primary fw-bold mb-4">
                    ₹{product.price}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary mb-4">{product.description}</p>

                  {/* ================= INFORMATION ================= */}
                  <div className="mb-3">
                    <p className="mb-2">
                      <strong>Stock:</strong> {product.stock}
                    </p>

                    <p className="mb-2">
                      <strong>Discount:</strong> {product.discountPercentage}%
                    </p>

                    <p className="mb-2">
                      <strong>Minimum Order:</strong>{" "}
                      {product.minimumOrderQuantity}
                    </p>

                    <p className="mb-2">
                      <strong>Warranty:</strong> {product.warrantyInformation}
                    </p>

                    <p className="mb-2">
                      <strong>Shipping:</strong> {product.shippingInformation}
                    </p>

                    <p className="mb-2">
                      <strong>Availability:</strong>{" "}
                      {product.availabilityStatus}
                    </p>
                  </div>

                  {/* ================= BACK BUTTON ================= */}
                  <Link to="/Electronics" className="btn btn-primary mt-3">
                    <i className="bi bi-arrow-left me-1"></i>
                    Back to Electronics
                  </Link>

                  <button
                    className="btn btn-danger mt-3 ms-2"
                    onClick={() => {
                      fetch(apiurl, { method: "DELETE" })
                        .then((res) => res.json())
                        .then((res) => navigate("/Electronics"));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= NOT FOUND ================= */
          <div className="alert alert-danger">
            Electronics product not found.
          </div>
        )}
      </div>
    </>
  );
}

export default ElectronicsDetails;
