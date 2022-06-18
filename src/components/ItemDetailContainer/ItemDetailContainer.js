import {getFetch} from '../../helpers/getFetch';
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

  const [prod, setProd] = useState({});

  const{id} = useParams();

  useEffect(() => {
    getFetch(id)
    .then(resp => {
      setProd(resp);
    })
    .catch(err => console.log(err))
  },[]);

  return(
    <div>
      <ItemDetail data={prod}/>
    </div>
  );
}

export default ItemDetailContainer;
