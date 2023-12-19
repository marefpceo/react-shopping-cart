import PropTypes from 'prop-types';
import { useState } from 'react';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import menuIcon from '../../assets/bars-solid.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  const [displayState, setDisplayState] = useState('-600px');
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleClick() {
    if (displayState === '-600px') {
      setDisplayState('0');
      setScrollPosition(document.body.style.top);
      document.body.style.position = 'fixed';
      document.body.style.top = `${scrollPosition}`;
    } else {
      setDisplayState('-600px');
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollPosition || '0') * -1);
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
