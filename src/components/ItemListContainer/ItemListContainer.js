import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {


  return (
    <div>
      <p style={{backgroundColor:"maroon", color:"white"}}>{greeting}</p>
      <ItemCount stock="10" initial="1"/>
    </div>
  );
}

export default ItemListContainer
