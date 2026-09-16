import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Food() {
  const apiurl = "https://dummyjson.com/recipes";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        console.log("Food=", res);
        setData(res.recipes);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* ================= TITLE ================= */}
      <div className="container py-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Food List</h2>

          <p className="text-secondary mb-0">
            Explore our delicious food recipes
          </p>
        </div>

        {/* ================= LOADING ================= */}
        {loading ? (
          <div className="row g-3">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div className="col-6 col-lg-3" key={index}>
                  <div className="card h-100">
                    {/* Image Placeholder */}
                    <div
                      className="placeholder-glow bg-light"
                      style={{ height: "220px" }}
                    >
                      <span className="placeholder w-100 h-100"></span>
                    </div>

                    <div className="card-body p-2 p-md-3">
                      {/* Cuisine */}
                      <p className="placeholder-glow mb-2">
                        <span className="placeholder col-5"></span>
                      </p>

                      {/* Food Name */}
                      <h5 className="card-title placeholder-glow mb-2">
                        <span className="placeholder col-9"></span>
                      </h5>

                      {/* Difficulty */}
                      <p className="card-text placeholder-glow mb-2">
                        <span className="placeholder col-7"></span>
                      </p>

                      {/* Rating */}
                      <p className="placeholder-glow mb-2">
                        <span className="placeholder col-4"></span>
                      </p>

                      {/* Button */}
                      <a
                        href="#"
                        tabIndex="-1"
                        className="btn btn-primary disabled placeholder w-100"
                      ></a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ================= FOOD ================= */
          <div className="row g-3">
            {data.map((food) => {
              return (
                <div className="col-6 col-lg-3" key={food.id}>
                  <div className="card h-100 shadow-sm">
                    {/* ================= IMAGE ================= */}
                    <img
                      src={food.image}
                      className="card-img-top"
                      alt={food.name}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    {/* ================= CARD BODY ================= */}
                    <div className="card-body d-flex flex-column p-2 p-md-3">
                      {/* Cuisine */}
                      <span className="badge text-bg-light border align-self-start mb-2">
                        {food.cuisine}
                      </span>

                      {/* Food Name */}
                      <h5 className="card-title fw-bold mb-2">{food.name}</h5>

                      {/* Difficulty */}
                      <p className="text-secondary small mb-2">
                        Difficulty: {food.difficulty}
                      </p>

                      {/* Rating + Calories */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge text-bg-warning">
                          <i className="bi bi-star-fill me-1"></i>
                          {food.rating}
                        </span>

                        <span className="text-secondary small">
                          {food.caloriesPerServing} cal
                        </span>
                      </div>

                      {/* More Details */}
                      <Link
                        to={"/FoodDetails/" + food.id}
                        className="btn btn-primary mt-auto w-100"
                      >
                        <i className="bi bi-eye me-1"></i>
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Food;
