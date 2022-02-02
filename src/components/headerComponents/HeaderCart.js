import React, { useState } from 'react';
import HeaderCartItem from './HeaderCartItem';
import { Link } from 'react-router-dom';

export default function HeaderCart() {
  const [cartItems] = useState([
    {
      id: 1,
      name: 'Test',
      img: 'Test',
      rating: 'Test'
    },
    {
      id: 1,
      name: 'Test',
      img: 'Test',
      rating: 'Test'
    },
  ]);
  const [sumPrice] = useState('0$');

  //TODO: store integration/fetching

  return (
    <div className="cart__drop">
      <div className="cart__drop_items">
        {cartItems.map(item =>
          <HeaderCartItem key={item.id} item={item}/>
        )}
      </div>
      <div className="cart__drop_total">
        <h3>TOTAL {sumPrice}</h3>
        <Link to="/checkout"
          className="cart__drop_total__checkout">Checkout</Link>
        <Link to="/shopping_cart" className="cart__drop_total__goto">Go
          to cart</Link>
      </div>
    </div>
  );
}
