import React from 'react';
import { Redirect, Route, Routes } from 'react-router-dom';
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
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/products" exact>
        <ProductsPage />
      </Route>
      <Route path="/products/:id" exact>
        <ProductPage />
      </Route>
      <Route path="/products/:id" exact>
        <CheckoutPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Redirect to="/" />
    </Routes>
  );
};
