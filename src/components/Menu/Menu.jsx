import menuExit from '../../assets/xmark-solid.png';
import PropTypes from 'prop-types';
import '../Menu/Menu.css';
import { Link } from 'react-router-dom';

function Menu({ displayState, handleClick, updateCategory }) {

  function displayCategory(categoryName) {
    updateCategory(categoryName);
    handleClick();
  }

  return (
    <aside style={{ marginLeft: displayState }}>
      <div className='menu-container'>
        <Link to={'/'} onClick={handleClick}>
          <h2>Home</h2>
        </Link>
        <Link to={'/shop'} onClick={()=> displayCategory('')}>
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
            <Link 
              to={'/shop'} 
              onClick={()=> displayCategory('smartphones')}>
              <p>Smart Phones</p>
            </Link>
          </li>
          <li>
            <Link 
              to={'/shop'} 
              onClick={()=> displayCategory('laptops')}
            >
              <p>Laptops</p>
            </Link>
          </li>
          <li>
            <Link 
              to={'/shop'} 
              onClick={()=> displayCategory('fragrances')}
            >
              <p>Fragrances</p>
            </Link>
          </li>
          <li>
            <Link 
              to={'/shop'} 
              onClick={()=> displayCategory('skincare')}
            >
              <p>Skin Care</p>
            </Link>
          </li>
          <li>
            <Link 
              to={'/shop'} 
              onClick={()=> displayCategory('groceries')}
            >
              <p>Groceries</p>
            </Link>
          </li>
          <li>
            <Link 
              to={'/shop'} 
              onClick={()=> displayCategory('home-decoration')}
            >
              <p>Home Decor</p>
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
  updateCategory: PropTypes.func
};

export default Menu;
