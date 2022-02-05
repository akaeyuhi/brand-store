import React, { useCallback } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartAdd } from '../store/actions/actions';

export default function FeaturedItems() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const clickHandler = useCallback(item =>
    dispatch(cartAdd(item)),
  [items]);

  return (
    <section className='products container'>
      <div className='products__header'>
        <h3>Featured Items</h3>
        <p>Shop for items based on what we featured in this week</p>
      </div>
      <div className='products__content'>
        {items.map(item => <Item key={item.id} item={item}
          clickHandler={clickHandler} />)}
        <Link className='products__button' to='/products'>Browse All
          Product→</Link>
      </div>
    </section>
  );
}
