import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import '../Shop/Shop.css';

function Shop() {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');

        if (response.status >= 400) {
          throw new Error('Server error');
        }
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
    console.log(productData);
  }, []);

  return (
    <>
      <Header />
      <div className='card-div'>
        {error ? 
          <p>A network error has occured</p> : (
            loading ? 
              <p>Loading...</p> :       
        productData.map((item) => {
          return (
            <Card 
              key={item.id}
            />
          );
        }))
        }
      </div>
      <Footer />
    </>
  );
}

export default Shop;
