import React from 'react';
import man from '../assets/img/man.png';
import woman from '../assets/img/woman.png';
import kid from '../assets/img/kid.png';
import acc from '../assets/img/acc.png';

export const OfferBanner = () => <div className='offer container'>
  <div className='offer__content'>
    <div className='offer__content_big'
      style={{ backgroundImage: `url(${man})` }}>
      <div className='offer__text'>
        <p>hot deal</p>
        <p><span>for men</span></p>
      </div>
    </div>
    <div className='offer__content_mini'
      style={{ backgroundImage: `url(${acc})` }}>
      <div className='offer__text'>
        <p>LUXIROUS & trendy</p>
        <p><span>ACCESORIES</span></p>
      </div>
    </div>
  </div>
  <div className='offer__content'>
    <div className='offer__content_mini'
      style={{ backgroundImage: `url(${woman})` }}>
      <div className='offer__text'>
        <p>30% offer</p>
        <p><span>women</span></p>
      </div>
    </div>
    <div className='offer__content_big'
      style={{ backgroundImage: `url(${kid})` }}>
      <div className='offer__text'>
        <p>new arrivals</p>
        <p><span>FOR kids</span></p>
      </div>
    </div>
  </div>
</div>;
