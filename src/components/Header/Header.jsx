import PropTypes from 'prop-types';
import { useState } from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import menuIcon from '../../assets/bars-solid.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

function Header({ cartCount, updateCategory }) {
  const [displayState, setDisplayState] = useState('0%');
  const [showMenu, setShowMenu] = useState('0');
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleClick() {
    if (displayState === '0%') {
      setDisplayState('100%');
      setShowMenu('1');
      setScrollPosition(document.body.style.top);
      document.body.style.position = 'fixed';
      document.body.style.top = `${scrollPosition}`;
    } else {
      setDisplayState('0%');
      setShowMenu('0');
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollPosition || '0') * -1);
    }
  }

  return (
    <header>
      <Menu
        displayState={displayState}
        showMenu={showMenu}
        handleClick={handleClick}
        updateCategory={updateCategory}
      />
      <div className='logo-nav-div'>
        <div className='logo'>
          <img src={menuIcon} alt='' onClick={handleClick} />
          <Link to='/'>
            <h1>Last Stop Shop</h1>
          </Link>
        </div>
        <Nav cartCount={cartCount} />
      </div>
      <div className='menu-nav-div'></div>
    </header>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number,
  updateCategory: PropTypes.func,
};

export default Header;
