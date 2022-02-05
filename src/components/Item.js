import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Item({ item, clickHandler }) {

  const addHandler = useCallback(event => {
    event.preventDefault();
    clickHandler(item);
  }, [item]);

  return (
    <div className='products__item'>
      <Link className='products__img' to={`/products/${item.id}`}>
        <img alt='product' src='../assets/img/shirt.png' />
      </Link>
      <div className='products__text'>
        <Link to={`/products/${item.id}`}
          className='products__link link'>{item.name}</Link>
        <p>{item.price}$
          <img alt='star' className='products__star'
            src={item.rating} />
        </p>
      </div>
      <a onClick={event => addHandler(event)} className='products__add' href='#'>Add to
        cart</a>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
  }),
  clickHandler: PropTypes.func,
};

export default Item;
