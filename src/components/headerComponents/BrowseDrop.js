import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BrowseDrop() {
  const [menLinks] = useState([
    'Dresses',
    'Tops',
    'Sweaters/Knits',
    'Jackets/Coats',
    'Blazers',
    'Denim',
    'Leggings/Pants',
    'Skirts/Shorts',
    'Accessories',
  ]);
  const [womenLinks] = useState([
    'Tees/Tank tops',
    'Shirts/Polos',
    'Sweaters',
    'Sweatshirts/Hoodies',
    'Blazers',
    'Jackets/vests',
  ]);

  //TODO: Fetching links/filling routes path

  return (
    <div className='drop__browse'>
      <div className='drop__browse__flex'>
        <h3 className='drop__h3'>Women</h3>
        <ul className='drop__menu'>
          {womenLinks.map((link, idx) => <li key={idx}>
            <Link className='drop__link link' to='/products'
              tag='a'>{link}</Link>
          </li>)}
        </ul>
      </div>
      <div className='drop__flex'>
        <h3 className='drop__h3'>Men</h3>
        <ul className='drop__menu'>
          {menLinks.map((link, idx) => <li key={idx}>
            <Link className='drop__link link' to='/products'
              tag='a'>{link}</Link>
          </li>)}
        </ul>
      </div>
    </div>
  );
}
