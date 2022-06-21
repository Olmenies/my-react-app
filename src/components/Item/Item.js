import './Item.css';
import {NavLink} from 'react-router-dom';

const Item = ({data}) => {
  const {id, title, price, picture} = data;
  return(
    <div className='item'>
      <img className='itemImage' src={picture} alt={`Foto de ${title}`}/>
      <div>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime mollitia, omnis, voluptas quidem nesciunt voluptates explicabo corrupti maiores quos natus magni. Vel temporibus suscipit tenetur ducimus quos aspernatur ex, sequi?</p>
      </div>
      <div>
        <p>${price}</p>
        <NavLink to={`/ItemDetailContainer/${id}`}><button className='itemButton'>Ver detalle</button></NavLink>
      </div>
    </div>
  );
}

export default Item;
