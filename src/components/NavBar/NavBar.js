/*
  TODO:
  . Unhardcode the li/filter from a map of the cart
*/

import './NavBar.css';
import Branch from '../Branch/Branch';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <Branch/>
      <ul>
        <li><NavLink className='NavLinkAnchor' to="/">Home</NavLink></li>
        <li><NavLink className='NavLinkAnchor' to="/filter/fish">Peces</NavLink></li>
        <li><NavLink className='NavLinkAnchor' to="/filter/accesory">Accesorios</NavLink></li>
      </ul>
      <NavLink to="/Cart"><CartWidget/></NavLink>
    </nav>
  );
}

export default NavBar
