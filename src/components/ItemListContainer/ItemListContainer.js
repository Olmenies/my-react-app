import './ItemListContainer.css';
import Item from '../Item/Item';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect} from 'react';
import {getFetch} from '../../helpers/getFetch';

const ItemListContainer = ({greeting}) => {
  const [prod, setProd] = useState([]);

  //Necesitamos un useEffect para que ejecute la promesa después de que termine el primer render y no bloqueé la app
  useEffect(() => {
    getFetch()
    .then(resp => {
      setProd(resp);
    })
    .catch(err => console.log(err))
    .finally(() => console.log("Cumbia"));
  },[]);

  console.log(prod);

  return (
    <div>
      <p style={{backgroundColor:"maroon", color:"white"}}>{greeting}</p>
      <ItemList/>
    </div>
  );
}

export default ItemListContainer;
