import './Item.css';
import {NavLink} from 'react-router-dom';

const Item = ({data}) => {

  const {id, title, description, price, picture} = data;
  return(
    <div className='item'>
      <img className='itemImage' src={picture} alt={`Foto de ${title}`}/>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>${price}</p>
        <NavLink to={`/ItemDetailContainer/${id}`}><button className='itemButton'>Ver detalle</button></NavLink>
      </div>
    </div>
  );
}

export default Item;
