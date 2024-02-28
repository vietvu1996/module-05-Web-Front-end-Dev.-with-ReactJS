import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "../components/job/ProductList";
import ProductDetail from "../components/job/ProductDetail";
import ProductAdd from "../components/job/ProductAdd";
import ProductEdit from "../components/job/ProductEdit";

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/products/add" element={<ProductAdd />} />
      <Route path="/products/edit/:productId" element={<ProductEdit />} />
    </Routes>
  );
}

export default AppRouters;
