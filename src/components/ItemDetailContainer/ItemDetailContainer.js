import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

  const [prod, setProd] = useState({});

  const{id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryItem = doc(db, 'products', id);
    getDoc(queryItem)
    .then(resp => setProd({id:resp.id, ...resp.data()}));
  },[id]);

  return(
    <div>
      <ItemDetail data={prod}/>
    </div>
  );
}

export default ItemDetailContainer;
