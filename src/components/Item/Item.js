import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({data}) => {
  const {id, title, price, picture} = data;
  return(
    <div style={{border:"solid 2px maroon"}}>
      <h3>{title}</h3>
      <img src="" alt="Imagen de prueba"/>
      <p>${price}</p>
      <ItemCount stock="10" initial="1"/>
    </div>
  );
}

export default Item;
