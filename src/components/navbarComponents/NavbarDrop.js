import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarDrop() {
  const [links] = useState([
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


  return (
    <div className='drop__flex'>
      <h3 className='drop__h3'>Women</h3>
      <ul className='drop__menu'>
        {links.map((name, idx) =>
          <li key={idx}><Link className='drop__link link'
            to='/products'>{name}</Link></li>)
        }
      </ul>
    </div>
  );
}
