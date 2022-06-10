import './Item.css';
import {NavLink} from 'react-router-dom';

const Item = ({data}) => {
  const {id, title, price, picture} = data;
  return(
    <div style={{border:"solid 2px maroon"}}>
      <h3>{title}</h3>
      <img src="" alt="Imagen de prueba"/>
      <p>${price}</p>
      <NavLink to={`/ItemDetailContainer/${id}`}><button>Ver detalle</button></NavLink>
    </div>
  );
}

export default Item;
