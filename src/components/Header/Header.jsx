import Nav from '../Nav/Nav';
import menuIcon from '../../assets/bars-solid.png';
import '../Header/Header.css';

function Header() {
  return (
    <header>
      <div className='logo-nav-div'>
        <div className='logo'>
          <img src={menuIcon} alt='' />
          <h1>Last Stop Shop</h1>
        </div>
        <div className='nav-icons'>
          <Nav />
        </div>
      </div>
      <div className='menu-nav-div'></div>
    </header>
  );
}

export default Header;
