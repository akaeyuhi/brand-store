import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function About() {
  return (
    <div className="about container">
      <div className="about__desc">
        <Link className="logo" to="/">
          <img alt="logo" className='logo__img' src={logo} />
          <p>BRAN<span>D</span></p>
        </Link>
        <br />
        <p className="about__text">
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.<br /><br />
            Efficiently plagiarize 24/365 action items and focused
            infomediaries.
            Distinctively seize superior initiatives for wireless technologies.
            Dynamically optimize.
        </p>
      </div>
      <div className="about__links">
        <div className="about__links__block">
          <Link to="/" className="about__header_link">COMPANY</Link><br />
          <Link to="/" className="about__link link">Home</Link><br />
          <Link to="/products" className="about__link link">Shop</Link><br />
          <Link to="/" className="about__link link">About</Link><br />
          <Link to="/" className="about__link link">How It Works</Link><br />
          <Link to="/" className="about__link link">Contact</Link>
        </div>
        <div className="about__links__block">
          <Link to="/" className="about__header_link link">INFORMATION</Link><br />
          <Link to="/" className="about__link link">Tearms & Condition</Link><br />
          <Link to="/" className="about__link link">Privacy Policy</Link><br />
          <Link to="/" className="about__link link">How to Buy</Link><br />
          <Link to="/" className="about__link link">How to Sell</Link><br />
          <Link to="/" className="about__link link">Promotion</Link>
        </div>
        <div className="about__links__block">
          <Link to="/products" className="about__header_link link">SHOP CATEGORY</Link><br />
          <Link to="/products" className="about__link link">Men</Link><br />
          <Link to="/products" className="about__link link">Women</Link><br />
          <Link to="/products" className="about__link link">Child</Link><br />
          <Link to="/products" className="about__link link">Apparel</Link><br />
          <Link to="/products.html" className="about__link link">Brows All</Link>
        </div>
      </div>
    </div>
  );
}
