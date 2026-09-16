import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./Ex-React-Lab/Layout";
import Product from "./Ex-React-Lab/Product";
import Moviecard from "./Ex-React-Lab/Moviecard";
import Crud from "./Ex-React-Lab/Crud";
import Studentcruddetails from "./Ex-React-Lab/Studentcruddetails";
import Electronics from "./Ex-React-Lab/Electronics";
import Food from "./Ex-React-Lab/Food";
import FoodDetails from "./Ex-React-Lab/FoodDetails";
import Electronicsdetails from "./Ex-React-Lab/Electronicsdetails";
import ProtectedRoute from "./Ex-React-Lab/ProtectedRoute";
import Signup from "./Ex-React-Lab/Signup";

function App() {
  return (
    <Routes>

      {/* =========================
          PUBLIC PAGES
      ========================= */}

      <Route path="/Signup" element={<Signup />} />


      {/* =========================
          FIRST PAGE - PUBLIC
      ========================= */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Product />} />

        {/* =========================
            PROTECTED PAGES
        ========================= */}

        <Route
          path="Moviecard"
          element={
            <ProtectedRoute>
              <Moviecard />
            </ProtectedRoute>
          }
        />

        <Route
          path="Crud"
          element={
            <ProtectedRoute>
              <Crud />
            </ProtectedRoute>
          }
        />

        <Route
          path="StudentDetails/:id"
          element={
            <ProtectedRoute>
              <Studentcruddetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="Electronics"
          element={
            <ProtectedRoute>
              <Electronics />
            </ProtectedRoute>
          }
        />

        <Route
          path="ElectronicsDetails/:id"
          element={
            <ProtectedRoute>
              <Electronicsdetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="Food"
          element={
            <ProtectedRoute>
              <Food />
            </ProtectedRoute>
          }
        />

        <Route
          path="FoodDetails/:id"
          element={
            <ProtectedRoute>
              <FoodDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="Product"
          element={<Product />}
        />

      </Route>

    </Routes>
  );
}

export default App;