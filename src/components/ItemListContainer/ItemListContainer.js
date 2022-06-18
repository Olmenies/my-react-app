import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const handlerInput = (event) => {
    console.log(event);
  }

  return (
    <div onMouseMove={handlerInput}>
      <ItemList/>
    </div>
  );
}

export default ItemListContainer;
