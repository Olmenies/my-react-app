import './ItemList.css';
import Item from '../Item/Item';
import {getFetch} from '../../helpers/getFetch';
import {useState, useEffect} from 'react';

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemList = () => {

  const [prod, setProd] = useState([]);

  useEffect(() => {
    getFetch()
    .then(resp => {
      setProd(resp);
    })
    .catch(err => console.log(err))
  },[]);

  return(
    <div style={{display:"flex", justifyContent:"space-around"}}>
      {prod.map((element) => <Item data={element} key={element.id}/>)}
      <ItemDetailContainer/>
    </div>
  );
}

export default ItemList;
