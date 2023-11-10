import PropTypes  from 'prop-types';
// import searchIcon from '../../assets/magnifying-glass-solid.png';
import cartIcon from '../../assets/cart-shopping-solid.png';
// import homeIcon from '../../assets/house-solid.png';
import shopIcon from '../../assets/bag-shopping-solid.png';
import '../Nav/Nav.css';
import { Link } from 'react-router-dom';

function Nav({ cartCount }) {

  return (
    <nav>
      <ul>
        <li>
          <Link to={'/shop'}>
            <img src={shopIcon} alt='' className='icons' />
          </Link>
        </li>
        <li>
          <Link to={'/cart'}>
            <img src={cartIcon} alt='' className='icons' />
            <div id="cartCount" style={{ display: cartCount === 0 ? 'none' : 'flex'}}>
              {cartCount}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  cartCount: PropTypes.number,
}

export default Nav;
