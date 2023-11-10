import PropTypes from 'prop-types';
import { useState } from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import menuIcon from '../../assets/bars-solid.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  const [displayState, setDisplayState] = useState('-600px');

  function handleClick() {
    if (displayState === '-600px') {
      setDisplayState('0');
    } else {
      setDisplayState('-600px');
    }
  }

  return (
    <header>
      <Menu displayState={displayState} handleClick={handleClick} />
      <div className='logo-nav-div'>
        <div className='logo'>
          <img src={menuIcon} alt='' onClick={handleClick} />
          <Link to='/'>
            <h1>Last Stop Shop</h1>
          </Link>
        </div>
        <Nav cartCount={cartCount}/>
      </div>
      <div className='menu-nav-div'></div>
    </header>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number,
}

export default Header;
