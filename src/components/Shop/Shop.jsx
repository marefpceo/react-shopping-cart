import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import '../Shop/Shop.css';

function Shop() {
  const [productData, setProductData] = useState(null);
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
        setProductData(responseData);
        setError(null);
      } catch (error) {
        setError(error);
        setProductData(null);
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
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
