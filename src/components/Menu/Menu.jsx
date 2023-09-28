import '../Menu/Menu.css';

function Menu() {
  return (
    <aside>
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
    </aside>
  );
}

export default Menu;
