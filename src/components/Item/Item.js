import './Item.css';
import {NavLink} from 'react-router-dom';

const Item = ({data}) => {
  const {id, title, price, picture} = data;
  return(
    <div className='item'>
      <h3>{title}</h3>
      <img className='itemImage' src={picture} alt={`Foto de ${title}`}/>
      <p>${price}</p>
      <NavLink to={`/ItemDetailContainer/${id}`}><button className='itemButton'>Ver detalle</button></NavLink>
    </div>
  );
}

export default Item;
