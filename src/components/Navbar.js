import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuList from './navbarComponents/MenuList';

export default function Navbar() {
  const [linkNames] = useState([
    'Man',
    'Women',
    'Kids',
    'Accessories',
    'Featured',
    'Hot Deals',
  ]);

  return (
    <nav>
      <ul className='menu'>
        <li className='menu__list'><Link className='menu__link link'
                                         to='/'>Home</Link></li>
        {linkNames.map((linkName, idx) => <MenuList key={idx} name={linkName}
                                                    idx={idx} />)}
      </ul>
    </nav>
  );
}
