import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";

function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiurl = "https://dummyjson.com/recipes/" + id;

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((res) => {
        setFood(res);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="container py-5">
        {/* ================= TITLE ================= */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Food Details</h2>

          <p className="text-secondary">Explore complete recipe information</p>
        </div>

        {/* ================= LOADING ================= */}
        {loading ? (
          <div className="card shadow-sm">
            <div className="row g-0">
              <div className="col-md-5">
                <div
                  className="placeholder-glow bg-light"
                  style={{ height: "400px" }}
                >
                  <span className="placeholder w-100 h-100"></span>
                </div>
              </div>

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
        ) : food ? (
          /* ================= FOOD DETAILS ================= */
          <div className="card shadow-sm">
            <div className="row g-0">
              {/* ================= IMAGE ================= */}
              <div className="col-md-5">
                <img
                  src={food.image}
                  className="img-fluid rounded-start w-100"
                  alt={food.name}
                  style={{
                    height: "100%",
                    minHeight: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* ================= DETAILS ================= */}
              <div className="col-md-7">
                <div className="card-body p-4">
                  {/* Name */}
                  <h2 className="card-title fw-bold mb-3">{food.name}</h2>

                  {/* Cuisine */}
                  <span className="badge text-bg-light border mb-3">
                    {food.cuisine}
                  </span>

                  {/* Rating */}
                  <div className="mb-3">
                    <span className="badge text-bg-warning">
                      <i className="bi bi-star-fill me-1"></i>
                      {food.rating}
                    </span>
                  </div>

                  {/* Information */}
                  <div className="mb-3">
                    <p className="mb-2">
                      <strong>Difficulty:</strong> {food.difficulty}
                    </p>

                    <p className="mb-2">
                      <strong>Prep Time:</strong> {food.prepTimeMinutes} minutes
                    </p>

                    <p className="mb-2">
                      <strong>Cook Time:</strong> {food.cookTimeMinutes} minutes
                    </p>

                    <p className="mb-2">
                      <strong>Servings:</strong> {food.servings}
                    </p>

                    <p className="mb-2">
                      <strong>Calories:</strong> {food.caloriesPerServing} cal
                    </p>
                  </div>

                  {/* ================= INGREDIENTS ================= */}
                  <h4 className="fw-bold mt-4">Ingredients</h4>

                  <ul>
                    {food.ingredients.map((ingredient, index) => {
                      return <li key={index}>{ingredient}</li>;
                    })}
                  </ul>

                  {/* ================= INSTRUCTIONS ================= */}
                  <h4 className="fw-bold mt-4">Instructions</h4>

                  <ol>
                    {food.instructions.map((instruction, index) => {
                      return <li key={index}>{instruction}</li>;
                    })}
                  </ol>

                  {/* ================= BACK BUTTON ================= */}
                  <Link to="/Food" className="btn btn-primary mt-3">
                    <i className="bi bi-arrow-left me-1"></i>
                    Back to Food
                  </Link>

                  <button className="btn btn-danger mt-3 ms-2"  onClick={()=>{
                    fetch(apiurl, {method: "DELETE"}) 
                    .then((res)=>res.json())
                    .then((res)=>navigate("/Food"));
                  }}>Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="alert alert-danger">Food not found.</div>
        )}
      </div>
    </>
  );
}

export default FoodDetails;
