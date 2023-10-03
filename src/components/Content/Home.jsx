import electronics from '../../assets/technology-stock.webp';
import womenClothing from '../../assets/female-bluejean.webp';
import furniture from '../../assets/home-furnishings-stock.webp';
import menClothing from '../../assets/ian-dooley-stock.webp';
import shoes from '../../assets/shoes-water-splash-stock.webp';
import Button from '../Button/Button';
import '../Content/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='main-content'>
      <div className='img-div'>
        <div className='main-image'>
          <img src={electronics} alt='' />
        </div>
        <div className='main-image'>
          <img src={womenClothing} alt='' />
        </div>
        <div className='main-image'>
          <img src={furniture} alt='' />
        </div>
        <div className='main-image'>
          <img src={menClothing} alt='' />
        </div>
        <div className='main-image'>
          <img src={shoes} alt='' />
        </div>
      </div>
      <Link to='/shop'>
        <Button
          id={'shop-button'}
          buttonType={'button'}
          text={'Shop Now'}
          style={{
            backgroundColor: '#1f51ff',
            color: '#f9f9f9',
            fontWeight: 'bold',
            border: 'none',
            boxShadow: '1px 1px 3px 0 #686868',
            borderRadius: '4px',
            width: '80px',
            height: '30px',
          }}
        />
      </Link>
    </div>
  );
}

export default Home;
