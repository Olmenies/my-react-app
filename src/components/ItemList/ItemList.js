import './ItemList.css';
import Item from '../Item/Item';
import {getFetch} from '../../helpers/getFetch';
import {useState, useEffect} from 'react';

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
    </div>
  );
}

export default ItemList;
