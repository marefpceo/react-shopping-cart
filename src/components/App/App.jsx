import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState('');

  function updateCategory(newCategory) {
    setCategory(newCategory);
  }

  useEffect(() => {
    
  }, [category]);

  return (
    <>
      <Header 
        cartCount={cartCount}
        updateCategory={updateCategory}
      />
      <Outlet
        context={{
          cartList,
          setCartList,
          cartTotal,
          setCartTotal,
          cartCount,
          setCartCount,
          category,
          updateCategory
        }}
      />
      <Footer />
    </>
  );
}

export default App;
