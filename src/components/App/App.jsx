import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  function updateCartCount() {
    const quantitySum = cartList.reduce((a, b) => a + b.quantity, 0);
    
    setCartCount(quantitySum);
    console.log(cartCount);
  }

  return (
    <>
      <Header 
        cartCount={cartCount}
      />
      <Outlet
        context={{
          cartList,
          setCartList,
          cartTotal,
          setCartTotal,
        }}
      />
      <Footer />
    </>
  );
}

export default App;
