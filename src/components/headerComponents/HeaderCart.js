import React, { useCallback, useEffect, useState } from 'react';
import HeaderCartItem from './HeaderCartItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartDelete } from '../../store/slices/cartSlice';

export default function HeaderCart() {
  const cartItems = useSelector(state => state.cart.items);
  const [sumPrice, setSumPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => setSumPrice(cartItems.reduce((a, b) => a + b.price, 0)),
    [cartItems]);
  const btnCallback = useCallback(id => dispatch(cartDelete(id)), []);

  return (
    <div className='cart__drop'>
      <div className='cart__drop_items'>
        {cartItems.map(item =>
          <HeaderCartItem key={item.id} item={item} callback={btnCallback} />,
        )}
      </div>
      <div className='cart__drop_total'>
        <h3>TOTAL {sumPrice}$</h3>
        <Link to='/checkout'
          className='cart__drop_total__checkout'>Checkout</Link>
        <Link to='/shopping_cart' className='cart__drop_total__goto'>Go
          to cart</Link>
      </div>
    </div>
  );
}
