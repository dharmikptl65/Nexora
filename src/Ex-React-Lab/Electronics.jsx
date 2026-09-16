import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Electronics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const urls = [
          "https://dummyjson.com/products/category/smartphones",
          "https://dummyjson.com/products/category/laptops",
          "https://dummyjson.com/products/category/tablets",
          "https://dummyjson.com/products/category/mobile-accessories",
        ];

        const responses = await Promise.all(urls.map((url) => fetch(url)));

        const results = await Promise.all(responses.map((res) => res.json()));

        const allProducts = results.flatMap((result) => result.products);

        const randomProducts = [...allProducts]
          .sort(() => Math.random() - 0.5)
          .slice(0, 20)
          .map((product) => {
            const randomImage =
              product.images[Math.floor(Math.random() * product.images.length)];

            return {
              ...product,
              selectedImage: randomImage,
            };
          });

        setData(randomProducts);

        setData(randomProducts);
        setLoading(false);
      } catch (error) {
        console.log("Error =", error);
        setLoading(false);
      }
    };

    fetchElectronics();
  }, []);

  return (
    <>
      <div className="container py-4">
        {/* ================= TITLE ================= */}

        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Electronics Product List</h2>

          <p className="text-secondary mb-0">
            Explore our latest electronic products
          </p>
        </div>

        {/* ================= LOADING ================= */}

        {loading ? (
          <div className="row g-3">
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <div className="col-6 col-lg-3" key={index}>
                  <div className="card h-100">
                    <div
                      className="placeholder-glow bg-light"
                      style={{
                        height: "220px",
                      }}
                    >
                      <span className="placeholder w-100 h-100"></span>
                    </div>

                    <div className="card-body p-2 p-md-3">
                      <p className="placeholder-glow mb-2">
                        <span className="placeholder col-5"></span>
                      </p>

                      <h5 className="card-title placeholder-glow mb-2">
                        <span className="placeholder col-9"></span>
                      </h5>

                      <p className="card-text placeholder-glow mb-2">
                        <span className="placeholder col-7"></span>
                      </p>

                      <p className="placeholder-glow mb-2">
                        <span className="placeholder col-4"></span>
                      </p>

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
          /* ================= PRODUCTS ================= */

          <div className="row g-3">
            {data.map((ele) => {
              return (
                <div className="col-6 col-lg-3" key={ele.id}>
                  <div className="card h-100 shadow-sm">
                    {/* PRODUCT IMAGE */}

                    <img
                      src={ele.selectedImage}
                      className="card-img-top"
                      alt={ele.title}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body d-flex flex-column p-2 p-md-3">
                      {/* CATEGORY */}

                      <span className="badge text-bg-light border align-self-start mb-2">
                        {ele.category}
                      </span>

                      {/* NAME */}

                      <h5 className="card-title fw-bold mb-2">{ele.title}</h5>

                      {/* BRAND */}

                      <p className="text-secondary small mb-2">
                        Brand: {ele.brand || "Electronics"}
                      </p>

                      {/* PRICE + RATING */}

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="text-primary fw-bold mb-0">
                          ₹{Math.round(ele.price * 85)}
                        </h5>

                        <span className="badge text-bg-warning">
                          <i className="bi bi-star-fill me-1"></i>

                          {ele.rating}
                        </span>
                      </div>

                      {/* DETAILS BUTTON */}

                      <Link
                        to={"/Electronicsdetails/" + ele.id}
                        state={{ product: ele }}
                        className="btn btn-primary mt-auto w-100"
                      >
                        <i className="bi bi-eye me-1"></i> More Details
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

export default Electronics;
