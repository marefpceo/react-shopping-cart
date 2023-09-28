import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import '../Shop/Shop.css';

function Shop() {
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
