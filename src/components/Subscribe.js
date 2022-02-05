import React, { useCallback, useRef } from 'react';
import { useHttp } from '../hooks/http.hook';

export default function Subscribe() {
  const email = useRef('');

  const { authFetch } = useHttp('');

  const submitHandler = useCallback(event => {
    event.preventDefault();
    authFetch('/subscribe', 'POST', {
      email: email.current.value
    }).then(() => alert('success'));
  }, [email]);

  //TODO quotes carousel

  return (
    <section className='subscribe'>
      <div className='subscribe__filter'>
        <div className='subscribe__container container'>
          <div className='subscribe__quote'>
            <img src='../assets/img/quote_ava.png' alt='avatar'
              className='subscribe__avatar' />
            <div className='subscribe__desc'>
              <div className='subscribe__text'>
                <p className='subscribe__text__italic'>“Vestibulum quis
                  porttitor dui! Quisque viverra nunc mi,
                  a pulvinar purus condimentum a. Aliquam condimentum mattis
                  neque sed pretium”</p>
                <br />
                <p>
                  <span className='subscribe__text__bold'>Bin Burhan</span>
                  <br />
                  <span className='subscribe__text__small'>Dhaka, Bd</span>
                </p>
              </div>
              <div className='subscribe__indicate'>
                <div className='rect' />
                <div className='rect rect__active' />
                <div className='rect' />
              </div>
            </div>
          </div>
          <div className='subscribe__email'>
            <div className='subscribe__email__text'>
              <h3>Subscribe</h3>
              <p>FOR OUR NEWLETTER AND PROMOTION</p>
            </div>
            <form className='subscribe__email__form' onSubmit={submitHandler}>
              <input type='email' className='subscribe__email__input'
                placeholder='Enter Your Email' ref={email}/>
              <button className='subscribe__email__button' type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
