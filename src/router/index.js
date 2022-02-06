import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
/* eslint-disable react/jsx-no-undef */

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path='/cart' exact>
          <CartPage />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/products' exact>
        <ProductsPage />
      </Route>
      <Route path='/products/:id' exact>
        <ProductPage />
      </Route>
      <Route path='/products/:id' exact>
        <CheckoutPage />
      </Route>
      <Route path='/login' exact>
        <LoginPage />
      </Route>
      <Route path='/register' exact>
        <RegisterPage />
      </Route>
      <Redirect to='/' />
    </Routes>
  );
};
