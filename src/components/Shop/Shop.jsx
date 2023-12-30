import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import returnIcon from '../../assets/square-caret-up-solid.png';
import '../Shop/Shop.css';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalDisplay, setModalDisplay] = useState('none');
  const [modalMessage, setModalMessage] = useState('Added to Cart!');
  const [quantity, setQuantity] = useState('0');
  const [showReturn, setShowReturn] = useState(0);
  const { cartList } = useOutletContext([]);
  const { setCartList } = useOutletContext();
  const { cartTotal } = useOutletContext();
  const { setCartTotal } = useOutletContext();
  const { cartCount, setCartCount } = useOutletContext();
  const { category } = useOutletContext();
  const { updateCategory } = useOutletContext();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowReturn(1);
      } else {
        setShowReturn(0);
      }
    });

    async function getData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        let responseData = await response.json();

        setProductData(responseData.products);
        setError(null);
      } catch (error) {
        setError(error);
        setProductData([]);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [category]);

  function addToCart(e) {
    const cardId = e.target.parentElement.parentElement.parentElement.id;
    const dataId = Number(cardId.replace('card-', ''));
    const itemQuantity = Number(
      e.target.previousSibling.firstChild.nextSibling.value,
    );
    const previousEntry = cartList.findIndex((item) => item.id === dataId) + 1;

    if (itemQuantity === 0) {
      setModalDisplay('flex');
      setModalMessage('Enter a quantity');
      setTimeout(() => {
        setModalDisplay('none');
      }, 1500);
      return;
    } else if (dataId === previousEntry) {
      setCartList(
        cartList.map((item) => {
          if (item.id === dataId) {
            return {
              ...item,
              quantity: item.quantity + itemQuantity,
              itemTotal:
                item.itemTotal + productData[dataId - 1].price * itemQuantity,
            };
          } else {
            return item;
          }
        }),
      );
      setCartCount(cartCount + itemQuantity);
      setCartTotal(cartTotal + productData[dataId - 1].price * itemQuantity);
      setQuantity('0');
      setModalMessage('Cart updated!');
      setModalDisplay('flex');
      setTimeout(() => {
        setModalDisplay('none');
      }, 1500);
    } else {
      setCartList([
        ...cartList,
        {
          id: dataId,
          title: productData[dataId - 1].title,
          thumbnail: productData[dataId - 1].thumbnail,
          description: productData[dataId - 1].description,
          price: productData[dataId - 1].price,
          quantity: itemQuantity,
          itemTotal: productData[dataId - 1].price * itemQuantity,
        },
      ]);
      setCartCount(cartCount + itemQuantity);
      setCartTotal(cartTotal + productData[dataId - 1].price * itemQuantity);
      setQuantity('0');
      setModalMessage('Added to cart!');
      setModalDisplay('flex');
      handleScrollToTop();
      setTimeout(() => {
        setModalDisplay('none');
      }, 1500);
    }
  }

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleCategoryChange() {
    const catInput = document.getElementById('cat-list').value;
    updateCategory(catInput);
    handleScrollToTop();
  }

  return (
    <>
      <div className='card-div'>
        <select name='category' id='cat-list' onChange={handleCategoryChange}>
          <option value=''>All Products</option>
          <option value='smartphones'>Smart Phones</option>
          <option value='laptops'>Laptops</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skin Care</option>
          <option value='groceries'>Groceries</option>
          <option value='home-decoration'>Home Decor</option>
        </select>
        <img
          src={returnIcon}
          alt=''
          id='return-icon'
          style={{ opacity: `${showReturn}` }}
          onClick={handleScrollToTop}
        />
        <div className='message-modal' style={{ display: `${modalDisplay}` }}>
          <p>{modalMessage}</p>
        </div>

        {error ? (
          <p>A network error has occured</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : category === '' ? (
          productData.map((item) => {
            return (
              <Card
                key={item.id}
                id={`card-${item.id}`}
                thumbnail={item.thumbnail}
                brand={item.brand}
                title={item.title}
                description={item.description}
                price={item.price}
                addToCart={addToCart}
                quantity={`${quantity}`}
                setQuantity={setQuantity}
              />
            );
          })
        ) : (
          productData.map((item) => {
            if (item.category === `${category}`) {
              return (
                <Card
                  key={item.id}
                  id={`card-${item.id}`}
                  thumbnail={item.thumbnail}
                  brand={item.brand}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  addToCart={addToCart}
                  quantity={`${quantity}`}
                  setQuantity={setQuantity}
                />
              );
            }
          })
        )}
      </div>
    </>
  );
}

export default Shop;
