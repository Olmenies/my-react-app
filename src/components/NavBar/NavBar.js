import './NavBar.css';
import Branch from '../Branch/Branch';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
    <Branch/>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Catalog</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default NavBar
