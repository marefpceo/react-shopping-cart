import menuExit from '../../assets/xmark-solid.png';
import PropTypes from 'prop-types';
import '../Menu/Menu.css';
import { Link } from 'react-router-dom';

function Menu({ displayState, showMenu, handleClick, updateCategory }) {
  function displayCategory(categoryName) {
    updateCategory(categoryName);
    handleClick();
  }

  return (
    <aside style={{ width: displayState }}>
      <div className='menu-container' style={{ opacity: showMenu }}>
        <Link to={'/'} onClick={handleClick}>
          <h2>Home</h2>
        </Link>
        <Link to={'/shop'} onClick={() => displayCategory('')}>
          <h2>Shop</h2>
        </Link>
        <Link to={'/cart'} onClick={handleClick}>
          <h2>Cart</h2>
        </Link>
        <hr />
        <h2>Departments</h2>
        <hr />
      </div>
      <img src={menuExit} alt='' id='menu-exit' onClick={handleClick} />
    </aside>
  );
}

Menu.propTypes = {
  displayState: PropTypes.string,
  showMenu: PropTypes.string,
  handleClick: PropTypes.func,
  updateCategory: PropTypes.func,
};

export default Menu;
