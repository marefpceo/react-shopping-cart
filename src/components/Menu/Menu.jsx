import menuExit from '../../assets/xmark-solid.png';
import PropTypes from 'prop-types';
import '../Menu/Menu.css';
import { Link } from 'react-router-dom';

function Menu({ displayState, handleClick }) {
  return (
    <aside style={{ marginLeft: displayState }}>
      <div className='menu-container'>
        <Link to={'/'} onClick={handleClick}>
          <h2>Home</h2>
        </Link>
        <Link to={'/shop'} onClick={handleClick}>
          <h2>Shop</h2>
        </Link>
        <Link to={'/cart'} onClick={handleClick}>
          <h2>Cart</h2>
        </Link>
        <hr />
        <h2>Departments</h2>
        <hr />
        <ul className='menu'>
          <li>
            <Link to={'/shop'} onClick={handleClick}>
              <p>Laptops</p>
            </Link>
          </li>
          <li>
            <Link to={'/shop'} onClick={handleClick}>
              <p>Smartphones</p>
            </Link>
          </li>
          <li>
            <Link to={'/shop'} onClick={handleClick}>
              <p>Home Furnishings</p>
            </Link>
          </li>
          <li>
            <Link to={'/shop'} onClick={handleClick}>
              <p>Shoes</p>
            </Link>
          </li>
          <li>
            <Link to={'/shop'} onClick={handleClick}>
              <p>Men Clothing</p>
            </Link>
          </li>
          <li>
            <Link to={'/shop'} onClick={handleClick}>
              <p>Women Clothing</p>
            </Link>
          </li>
        </ul>
      </div>
      <img src={menuExit} alt='' id='menu-exit' onClick={handleClick} />
    </aside>
  );
}

Menu.propTypes = {
  displayState: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Menu;
