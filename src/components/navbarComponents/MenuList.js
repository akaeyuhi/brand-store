import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavbarDrop from './NavbarDrop';

function MenuList({ name, idx }) {
  const [placeholder] = useState(new Array(3).fill(''));
  const dropClass  = useRef('drop');

  if (idx > 2) {
    dropClass.current += ' drop_right';
  }

  return (
    <li className="menu__list">
      <Link className="menu__link link" to="/products">{name}</Link>
      <div  className={dropClass.current}>
        {placeholder.map((_, key) => <NavbarDrop key={key} />)}
      </div>
    </li>
  );
}

MenuList.propTypes = {
  name: PropTypes.string,
  idx: PropTypes.number
};

export default MenuList;
