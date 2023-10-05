import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <>
      <Header />
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
