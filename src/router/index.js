import React from 'react';
import { Route, Switch } from 'react-router-dom';


export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
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
        <RegicterPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
