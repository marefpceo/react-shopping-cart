import Button from '../Button/Button';
import '../Cart/Cart.css';
import { useOutletContext } from 'react-router-dom';
import uniqid from 'uniqid';

function Cart() {
  const { cartList } = useOutletContext([]);
  const { cartTotal } = useOutletContext();

  return (
    <>
      <div className='cart-div'>
        <h2>Shopping Cart</h2>
        <hr />

        {cartList.map((item) => {
          return (
            <div className='cart-item' key={uniqid()}>
              <div className='cart-item-header' key={uniqid()}>
                <img src={item.thumbnail} alt='' className='cart-img' />
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
        })}

        <div className='cart-total'>
          <p>Cart Total</p>
          <p>${cartTotal}</p>
        </div>

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
