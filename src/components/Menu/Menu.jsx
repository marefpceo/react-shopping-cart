import menuExit from '../../assets/xmark-solid.png';
import PropTypes from 'prop-types';
import '../Menu/Menu.css';

function Menu({ displayState, handleClick }) {
  return (
    <aside style={{ marginLeft: displayState }}>
      <div className='menu-container'>
        <h2>Departments</h2>
        <hr />
        <ul className='menu'>
          <li>
            <p>Laptops</p>
          </li>
          <li>
            <p>Smartphones</p>
          </li>
          <li>
            <p>Home Furnishings</p>
          </li>
          <li>
            <p>Shoes</p>
          </li>
          <li>
            <p>Men Clothing</p>
          </li>
          <li>
            <p>Women Clothing</p>
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
