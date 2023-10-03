import { useState, useEffect } from 'react';
import Card from '../Card/Card';
// import returnIcon from '../../assets/square-caret-up-solid.png';
import '../Shop/Shop.css';

function Shop() {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=10');

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
  }, []);

  function addToCart(e) {
    const cardId = e.target.parentElement.parentElement.parentElement.id;
    const dataId = cardId.replace('card-', '');
    const itemQuantity = e.target.previousSibling.firstChild.nextSibling.value;

    setCartList([
      ...cartList,
      {
        title: productData[dataId - 1].title,
        thumbnail: productData[dataId - 1].thumbnail,
        description: productData[dataId - 1].description,
        price: productData[dataId - 1].price,
        quantity: itemQuantity,
      },
    ]);
    console.log(cartList);
  }

  return (
    <>
      {/* <img src={returnIcon} alt='' id='return-icon'/> */}
      <div className='card-div'>
        {error ? (
          <p>A network error has occured</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
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
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default Shop;
