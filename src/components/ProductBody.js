import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cart from '../assets/img/cart.svg';
import { cartAdd } from '../store/slices/cartSlice';

export default function ProductBody() {
  const itemId = useParams();
  const item = useSelector(state => state.allItems.items[itemId]);
  const dispatch = useDispatch();
  const [formData, updateFormData] = useState({});
  const changeHandler = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value.trim()
    });
  };
  const addBtnHandler = useCallback(event => {
    event.preventDefault();
    dispatch(cartAdd({
      ...formData,
      ...item,
    }));
  }, []);


  return (
    <section className="product">
      <div className="product__photos">
        <button className="product__photos__button"><i className='fas fa-chevron-left'/></button>
        <img src="img/woman_shirt.png" alt="Product image" className="product__img" />
        <button className="product__photos__button"><i className='fas fa-chevron-right'/>
        </button>
      </div>
      <div className="product__details">
        <div className="product__details__container">
          <div className="product__details__header">
            <h4 className="product__details__h4 colored">{ item.sex.toUpperCase() } COLLECTION</h4>
            <br />
            <div className="product__selector">
              <div className='product__select'/>
              <div className='product__select product__select_active'/>
              <div className='product__select'/>
            </div>
            <br />
            <h3 className="product__details__h3">{ item.name }</h3>
            <br />
            <p className="product__details__text">{ item.description }</p>
            <br />
            <div className="product__details__material">
              <div className="product__details__text">
                        MATERIAL: <span>{ item.categories[0] }</span>
              </div>
              <div className="product__details__text">
                        DESIGNER: <span>{ item.categories[1] }</span>
              </div>
            </div>
            <br />
            <h3 className="product__details__price">${ item.price }</h3>
          </div>
        </div>
        <form className="product__details__form">
          <div className="product__details__params">
            <div>
              <label htmlFor="color" className="product__details__label">CHOOSE COLOR</label><br />
              <br />
              <select id="color" className="product__details__input" onChange={changeHandler}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
            </div>
            <div>
              <label htmlFor="size" className="product__details__label">CHOOSE SIZE</label><br />
              <br />
              <select id="size" className="product__details__input" onChange={changeHandler}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className="product__details__label"
                onChange={changeHandler}>quantity</label><br />
              <br />
              <input id="quantity" type="text" placeholder="2"
                className="product__details__input" />
            </div>
          </div>
          <button className="product__details__add product__details__button_text"
            onClick={addBtnHandler}
            type="submit">
            <img src={ cart } alt="Button cart" className="product__details__cart" />
              Add to Cart
          </button>
        </form>
      </div>
    </section>);
}
