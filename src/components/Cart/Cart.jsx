import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';
import sampleImage from '../../assets/card-sample-photo.jpg';
import '../Cart/Cart.css';

function Cart() {
  return (
    <>
      <Header />
      <div className='cart-div'>
        <h2>Shopping Cart</h2>
        <hr />

        <div className='cart-item'>
          <div className='cart-item-header'>
            <img src={sampleImage} alt='' className='cart-img' />
            <div className='cart-item-description'>
              <h3>Sample OPPOF19</h3>
              <p>OPPO F19 is officially announced on April 2021.</p>
            </div>
          </div>
          <div className='cart-item-total'>
            <p>Qty: 2</p>
            <div>
              <p>$200</p>
              <p>Total $400</p>
            </div>
          </div>
        </div>

        <hr />
        <div className='cart-total'>
          <p>Cart Total</p>
          <p>$400</p>
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
      <Footer />
    </>
  );
}

export default Cart;
