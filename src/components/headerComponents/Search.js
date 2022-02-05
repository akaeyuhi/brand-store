import React from 'react';
import BrowseDrop from './BrowseDrop';

//TODO: Connect store

export default function Search() {
  return (
    <form className='form'>
      <a href='#' className='form_browse'>Browse <i
        className='fas fa-caret-down' /></a>
      <BrowseDrop />
      <input className='form__input' placeholder='Search for item...'
        type='text' />
      <button className='form__search'><i className='fas fa-search' />
      </button>
    </form>
  );
}
