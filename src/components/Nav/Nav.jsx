import searchIcon from '../../assets/magnifying-glass-solid.png';
import cartIcon from '../../assets/cart-shopping-solid.png';
import homeIcon from '../../assets/house-solid.png';
import shopIcon from '../../assets/bag-shopping-solid.png';
import '../Nav/Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img src={homeIcon} alt='' className='icons' />
        </li>
        <li>
          <img src={shopIcon} alt='' className='icons' />
        </li>
        <li>
          <img src={searchIcon} alt='' className='icons' />
        </li>
        <li>
          <img src={cartIcon} alt='' className='icons' />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
