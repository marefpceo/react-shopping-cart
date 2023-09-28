import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';
import menuIcon from '../../assets/bars-solid.png';
import '../Header/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Menu />
      <div className='logo-nav-div'>
        <div className='logo'>
          <img src={menuIcon} alt='' />
          <Link to='/'>
            <h1>Last Stop Shop</h1>
          </Link>
        </div>
        <Nav />
      </div>
      <div className='menu-nav-div'></div>
    </header>
  );
}

export default Header;
