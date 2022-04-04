import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/women_offer.jpg';
import car from '../assets/img/car.png';
import discount from '../assets/img/discount.png';
import crown from '../assets/img/crown.png';


export default function FeaturesBanner() {

  //TODO offer loading from server

  return (
    <section className='container features__offer'>
      <div className='features__pic'>
        <img alt='woman_offer' className='features__img'
          src={banner} />
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
            src={car} />
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
            src={discount} />
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
            src={crown} />
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
