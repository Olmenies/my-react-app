import Item from '../Item/Item';
import {getFetch} from '../../helpers/getFetch';
import {useState, useEffect} from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [prod, setProd] = useState({});

  useEffect(() => {
    getFetch(2)
    .then(resp => {
      setProd(resp);
    })
    .catch(err => console.log(err))
  },[]);

  return(
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <ItemDetail data={prod}/>
    </div>
  );
}

export default ItemDetailContainer;
