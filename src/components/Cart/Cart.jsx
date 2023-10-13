import Button from '../Button/Button';
import trashCanIcon from '../../assets/trash-can-regular.png';
import upIcon from '../../assets/chevron-up-solid.png';
import downIcon from '../../assets/chevron-down-solid.png';
import '../Cart/Cart.css';
import { useOutletContext } from 'react-router-dom';
import uniqid from 'uniqid';
import { useState } from 'react';

function Cart() {
  const { cartList, setCartList } = useOutletContext([]);
  const { cartTotal, setCartTotal } = useOutletContext();
  const [isShown, setIsShown] = useState(false);
  const [updatedQuantity, setUpdatedQuantity] = useState(0);
  const [cartItemIndex, setCartItemIndex] = useState(0);

  function editCartItem(e) {
    const cartItemId = e.target.parentElement.parentElement.id;
    setCartItemIndex(cartList.findIndex(
      (item) => item.id === Number(cartItemId),
    ));

    setUpdatedQuantity(cartList[cartItemIndex].quantity);
    setIsShown(true);
  }

  function handleQuantityChange() {
    setUpdatedQuantity(document.getElementById('edit-amount-input').value);
  }

  function updateCartItem() {
    setCartList(
      cartList.map((item) => {
        if (item.id === (cartItemIndex + 1)) {
          const update = {...item,
            quantity: updatedQuantity,
            itemTotal: updatedQuantity * item.price }
          console.log(update.itemTotal);
          return update;
            
        } else {
          return item;
        }
      }),
    );
    setIsShown(false);
    console.log(cartList);
  }

  return (
    <>
      <div className='cart-div'>
        <h2>Shopping Cart</h2>
        <hr />

        <div
          className='item-edit-modal'
          style={{ display: isShown ? 'flex' : 'none' }}
        >
          <p>Update item quantity</p>
          <div className='edit-buttons'>
            <Button
              id={'edit-decrement-btn'}
              buttonType={'button'}
              style={{
                backgroundImage: `url(${downIcon})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '75%',
              }}
              handleClick={() => {
                setUpdatedQuantity(updatedQuantity - 1);
              }}
            />
            <input
              type='text'
              name='amount-input'
              id='edit-amount-input'
              min={'0'}
              max={'99'}
              value={updatedQuantity}
              onChange={handleQuantityChange}
            />
            <Button
              id={'edit-increment-btn'}
              buttonType={'button'}
              style={{
                backgroundImage: `url(${upIcon})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '75%',
              }}
              handleClick={() => {
                setUpdatedQuantity(updatedQuantity + 1);
              }}
            />
          </div>
          <div className='update-buttons'>
            <Button
              id={'cancel-btn'}
              buttonType={'button'}
              text={'Cancel'}
              handleClick={() => {
                setIsShown(false);
              }}
            />
            <Button
              id={'remove-btn'}
              buttonType={'button'}
              text={'Remove All'}
            />
            <Button
              id={'update-btn'}
              buttonType={'button'}
              text={'Update'}
              handleClick={updateCartItem}
            />
          </div>
        </div>

        {cartList.length === 0 ? (
          <p className='empty-cart'>Your cart is currently empty!</p>
        ) : (
          cartList.map((item) => {
            return (
              <div className='cart-item' id={item.id} key={uniqid()}>
                <div className='cart-item-header' key={uniqid()}>
                  <img src={item.thumbnail} alt='' className='cart-img' />
                  <img
                    src={trashCanIcon}
                    alt='Delete entry'
                    className='trash-btn'
                    onClick={editCartItem}
                  />
                  <div className='cart-item-description' key={uniqid()}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className='cart-item-total' key={uniqid()}>
                    <p>Qty: {item.quantity}</p>
                    <div>
                      <p>${item.price}</p>
                      <p>Total ${item.itemTotal}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        )}

        {cartList.length === 0 ? (
          <div></div>
        ) : (
          <div className='cart-total'>
            <p>Cart Total</p>
            <p>${cartTotal}</p>
          </div>
        )}

        <hr />

        <div className='cart-options'>
          <Button
            id={'save-btn'}
            buttonType={'button'}
            style={{
              width: '110px',
              height: '30px',
              borderRadius: '3px',
              border: '1px solid #686868',
              boxShadow: '1px 1px 3px 0px #686868',
              backgroundColor: '#686868',
              color: '#f9f9f9',
            }}
            text={'Save for Later'}
          />

          <Button
            id={'checkout-btn'}
            buttonType={'submit'}
            style={{
              width: '110px',
              height: '30px',
              borderRadius: '3px',
              border: '1px solid #686868',
              boxShadow: '1px 1px 3px 0px #686868',
              backgroundColor: '#ff0000',
              color: '#f9f9f9',
              fontSize: '15px',
              fontWeight: 'bold',
            }}
            text={'Checkout'}
          />
        </div>
      </div>
    </>
  );
}

export default Cart;
