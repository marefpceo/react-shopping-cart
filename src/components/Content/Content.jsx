import electronics from '../../assets/technology-stock.webp';
import womenClothing from '../../assets/female-bluejean.webp';
import furniture from '../../assets/home-furnishings-stock.webp';
import menClothing from '../../assets/ian-dooley-stock.webp';
import shoes from '../../assets/shoes-water-splash-stock.webp';
import Button from '../Button/Button';
import '../Content/Content.css';
import { Link } from 'react-router-dom';

function Content() {
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
          style={
            {
              backgroundColor: 'blue',
              color: '#ffffff',
              border: '1px solid #000000',
              borderRadius: '4px',
              width: '80px',
              height: '30px'
            }
          }
        />
      </Link>
    </div>
  );
}

export default Content;
