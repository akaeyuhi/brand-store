import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturesBanner() {

  //TODO offer loading from server

  return (
    <section className='container features__offer'>
      <div className='features__pic'>
        <img alt='woman_offer' className='features__img'
          src='../assets/img/women_offer.jpg' />
        <div className='features__text'>
          <Link to='/products'>
            <h3 className='features__small'>30% <span>OFFER</span></h3>
            <h3 className='features__small big'>FOR WOMEN</h3>
          </Link>
        </div>
      </div>
      <div className='features__points'>
        <div className='features__point'>
          <img alt='features__logo' className='features__logo'
            src='../assets/img/car.png' />
          <div className='features__desc'>
            <h3 className='features__header'>Free Delivery</h3>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
        <div className='features__point'>
          <img alt='features__logo' className='features__logo'
            src='../assets/img/discount.png' />
          <div className='features__desc'>
            <h3 className='features__header'>Sales & discounts</h3>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
        <div className='features__point'>
          <img alt='features__logo' className='features__logo'
            src='../assets/img/crown.png' />
          <div className='features__desc'>
            <h3 className='features__header'>Quality assurance</h3>
            <p>
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
