import PropTypes from 'prop-types';
import Button from '../Button/Button';
import upIcon from '../../assets/chevron-up-solid.png';
import downIcon from '../../assets/chevron-down-solid.png';
import '../Card/Card.css';
import { useState } from 'react';

function Card({ thumbnail, title, description, price }) {
  const [quantity, setQuantity] = useState('0');
  const quantityAsNumber = Number(quantity);

  function handleAddQuantity() {
    setQuantity(quantityAsNumber + 1);
  }

  function handleSubtractQuantity() {
    if (quantity > 0) {
      setQuantity(quantityAsNumber - 1);
    } else {
      return;
    }
  }

  function handleChange(e) {
    let value = e.target.value;
    setQuantity(value);
  }

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={thumbnail} alt='' />
      </div>
      <div className='card-body'>
        <div className='item-name'>
          <h3>{title}</h3>
        </div>
        <div className='item-description'>
          <p>{description}</p>
        </div>
        <div className='item-cost'>
          <p>${price}</p>
        </div>
        <div className='card-footer'>
          <div className='item-amount'>
            <Button
              id={'decrement-btn'}
              buttonType={'button'}
              style={{
                backgroundImage: `url(${downIcon})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '75%',
              }}
              handleClick={handleSubtractQuantity}
            />
            <input
              type='text'
              name='amount-input'
              id='amount-input'
              min={'0'}
              max={'99'}
              value={quantity}
              onChange={handleChange}
            />
            <Button
              id={'increment-btn'}
              buttonType={'button'}
              style={{
                backgroundImage: `url(${upIcon})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '75%',
              }}
              handleClick={handleAddQuantity}
            />
          </div>
          <Button
            id={'add-to-cart-btn'}
            buttonType={'button'}
            style={{
              backgroundColor: '#228b22',
              color: '#f9f9f9',
              fontSize: '12px',
            }}
            text={'Add To Cart'}
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  brand: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
