import React from 'react';
import Search from './headerComponents/Search';
import { Link } from 'react-router-dom';
import HeaderCart from './headerComponents/HeaderCart';
import logo from '../assets/img/logo.png';
import cart from '../assets/img/cart.svg';


export default function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__left">
          <Link className="logo" to="/" tag="a">
            <img alt="logo" className='logo__img' src={logo}/>
            <p>BRAN<span>D</span></p>
          </Link>
          <Search />
        </div>
        <div className="header__right">
          <Link to="/cart" tag="a">
            <img alt="cart" className='cart' src={cart} />
          </Link>
          <HeaderCart />
          <Link className="my_acc" to="/cart">My account <i className="fas fa-caret-down" /></Link>
        </div>
      </div>
    </header>
  );
}
