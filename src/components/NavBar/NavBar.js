import './NavBar.css';
import Branch from '../Branch/Branch';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <Branch/>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Peces</NavLink></li>
        <li><NavLink to="/">Accesorios</NavLink></li>
      </ul>
      <NavLink to="/Cart"><CartWidget/></NavLink>
    </nav>
  );
}

export default NavBar
