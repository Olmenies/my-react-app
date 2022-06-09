import './ItemListContainer.css';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {

  return (
    <div>
      <p style={{backgroundColor:"maroon", color:"white"}}>{greeting}</p>
      <ItemList/>
    </div>
  );
}

export default ItemListContainer;
