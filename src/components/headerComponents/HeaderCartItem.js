import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//TODO: store integration

function HeaderCartItem({ item }) {
  return (
    <div className='cart__drop_item'>
      <div className='cart__drop__description'>
        <img src={item.img} alt={item.name} />
        <div className='cart__drop__description_text'>
          <h4><Link to={`/products/${item.id}`}
            className='cart__link link'>{item.name}</Link></h4>
          <img src={item.rating} alt='item rating'
            className='cart__star' />
          <p className='cart__text'>1 x $250</p>
        </div>
      </div>
      <button className='cart__delete'><i
        className='fas fa-times-circle' /></button>
    </div>
  );
}

HeaderCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    rating: PropTypes.string,
  }),
};

export default HeaderCartItem;
