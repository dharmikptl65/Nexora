import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cart, removeFromCart }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-dark px-3 px-md-5 py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white fw-bold fs-4">
          <i
            className="fa-brands fa-shopify me-2"
            style={{ color: "rgb(248, 190, 2)" }}
          />
          ShopNest
        </Link>

        <div className="position-relative">
          <button
            className="btn btn-light d-flex align-items-center gap-2"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart</span>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </button>

          {cartOpen && (
            <div
              className="position-absolute end-0 mt-2 bg-white border rounded-3 shadow p-3"
              style={{
                width: "320px",
                maxWidth: "90vw",
                zIndex: 1050,
              }}
            >
              <h5 className="mb-3">Selected Products</h5>

              {cart.length === 0 ? (
                <p className="text-secondary mb-0">
                  No products selected
                </p>
              ) : (
                cart.map((product) => (
                  <div
                    className="d-flex align-items-center gap-2 py-2 border-bottom"
                    key={product.id}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded"
                      style={{
                        width: "45px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="flex-grow-1">
                      <p className="mb-1 fw-semibold small">
                        {product.name}
                      </p>

                      <span className="text-secondary small">
                        ₹{product.price}
                      </span>
                    </div>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}


function ProductCard({
  product,
  cart,
  addToCart,
  removeFromCart,
}) {
  const isAdded = cart.some(
    (item) => item.id === product.id
  );

  return (
    <div className="card h-100 shadow-sm border-0 overflow-hidden">

      {/* ================= PRODUCT IMAGE ================= */}

      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{
          height: "240px",
          objectFit: "cover",
        }}
      />

      {/* ================= CARD CONTENT ================= */}

      <div className="card-body d-flex flex-column p-3 p-md-4">

        <h5 className="card-title fw-semibold mb-2">
          {product.name}
        </h5>

        <p className="fs-5 fw-bold mb-3">
          ₹{product.price}
        </p>

        {/* ================= BUTTON ================= */}

        <div className="mt-auto">

          {!isAdded ? (
            <button
              className="btn btn-dark w-100"
              onClick={() => addToCart(product)}
            >
              <i className="fa-solid fa-cart-plus me-1 me-md-2"></i>
              <span>Add to Cart</span>
            </button>
          ) : (
            <button
              className="btn btn-outline-danger w-100"
              onClick={() => removeFromCart(product.id)}
            >
              <i className="fa-solid fa-trash me-1 me-md-2"></i>
              <span>Remove</span>
            </button>
          )}

        </div>

      </div>
    </div>
  );
}


function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 499,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg",
    },

    {
      id: 2,
      name: "Smart Watch",
      price: 2199,
      image:
        "https://i.pinimg.com/236x/98/c5/3e/98c53e040c15264fa246ba747795fdb2.jpg",
    },

    {
      id: 3,
      name: "Running Shoes",
      price: 1999,
      image:
        "https://content.jdmagicbox.com/comp/def_content_category/bata-shoe-stores/78128466-2846905632010181-5119491739979087872-n-bata-shoe-stores-7792-kqskt.jpg",
    },

    {
      id: 4,
      name: "Travel Backpack",
      price: 999,
      image:
        "https://safaribags.com/cdn/shop/files/Artboard1_ef881814-b1ab-47bb-beb9-4018e6e56be0_500x.jpg?v=1773226510",
    },

    {
      id: 5,
      name: "Classic Sunglasses",
      price: 799,
      image:
        "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/1080x1080/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-navy-full-rim-geometric-lenskart-ip-lk-s19624-polarized-sunglasses_246243dsc_2394_24_06_2026.jpg",
    },
  ];


  /* ================= ADD ================= */

  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  /* ================= REMOVE ================= */

  const removeFromCart = (productId) => {
    setCart(
      cart.filter((product) => product.id !== productId)
    );
  };


  return (
    <>
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
      />

      <main className="container py-5">

        {/* ================= PAGE HEADER ================= */}

        <div className="text-center mb-5">

          <span className="text-primary fw-bold small">
            SHOP OUR COLLECTION
          </span>

          <h1 className="mt-2 fw-bold">
            Featured Products
          </h1>

          <p className="text-secondary mb-0">
            Discover our latest products at the best prices.
          </p>

        </div>


        {/* ================= PRODUCT GRID ================= */}

        <div className="row g-4">

          {products.map((product) => (

            <div
              className="col-6 col-lg-3"
              key={product.id}
            >
              <ProductCard
                product={product}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </div>

          ))}

        </div>

      </main>
    </>
  );
}

export default Product;