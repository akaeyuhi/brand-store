import React from 'react';

export const Footer = () => <footer className="footer">
  <div className="footer__flex container">
    <div className="footer__copy">
      <p>© 2021 Brand All Rights Reserved.</p>
    </div>
    <div className="footer__buttons">
      <a href="https://facebook.com" className="footer__button"><i className='fab fa-facebook-f'/></a>
      <a href="https://twitter.com" className="footer__button"><i className='fab fa-twitter'/></a>
      <a href="https://linkedin.com" className="footer__button"><i className='fab fa-linkedin-in'/></a>
      <a href="https://pinterest.com" className="footer__button"><i className='fab fa-pinterest-p'/></a>
      <a href="https://google.com" className="footer__button"><i className='fab fa-google-plus-g'/></a>
    </div>
  </div>
</footer>;
