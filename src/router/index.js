import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import ProductsPage from '../views/ProductsPage';
import ProductPage from '../views/ProductPage';
import CheckoutPage from '../views/CheckoutPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import CartPage from '../views/CartPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/cart" exact element={<CartPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" exact element={<ProductsPage />}/>
      <Route path="/products/:id" exact element={<ProductPage />} />
      <Route path="/checkout" exact element={<CheckoutPage />} />
      <Route path="/login" exact element={<LoginPage />} />
      <Route path="/register" exact element={<RegisterPage />} />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};
