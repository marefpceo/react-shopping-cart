import PropTypes from 'prop-types';
import Button from '../Button/Button';
import upIcon from '../../assets/chevron-up-solid.png';
import downIcon from '../../assets/chevron-down-solid.png';
import '../Card/Card.css';
import { useEffect, useState } from 'react';

function Card({
  thumbnail,
  title,
  description,
  price,
  id,
  addToCart,
  quantity,
}) {
  const [quantityAsNumber, setQuantityAsNumber] = useState(Number(quantity));

  useEffect(() => {
    setQuantityAsNumber(0);
  }, [addToCart]);

  function handleAddQuantity() {
    setQuantityAsNumber(quantityAsNumber + 1);
  }

  function handleSubtractQuantity() {
    if (quantityAsNumber > 0) {
      setQuantityAsNumber(quantityAsNumber - 1);
    } else {
      return;
    }
  }

  function handleChange(e) {
    let value = e.target.value;
    setQuantityAsNumber(value);
  }

  return (
    <div className='card' id={id}>
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
              value={quantityAsNumber}
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
            handleClick={addToCart}
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
  id: PropTypes.string,
  addToCart: PropTypes.func,
  handleChange: PropTypes.func,
  quantity: PropTypes.string,
};

export default Card;
