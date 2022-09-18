import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Arrivals({ item }) {
  return (
    <section className="arrivals">
      <div className="arrivals__container">
        <div className="arrivals__text">
          <h3 className="arrivals__header">
            New Arrivals
          </h3>
        </div>
        <div className="arrivals__text">
          <p>
            <Link to="/" className="arrivals__links link">Home /</Link>
            <Link to="/products" className="arrivals__links link">{item.sex} /</Link>
            <Link to="/products/new_arrivals" className="arrivals__links link arrivals__colored">New
              Arrivals</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

Arrivals.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    sex: PropTypes.string,
    categories: PropTypes.array,
    photo: PropTypes.string,
    discountPrice: PropTypes.number,
  })
};
