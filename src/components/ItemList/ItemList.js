import './ItemList.css';
import Item from '../Item/Item';
import {useState, useEffect, memo} from 'react';
import {useParams} from 'react-router-dom'
import {getFirestore, collection, getDocs} from 'firebase/firestore';

//We use memo() to memorize the list and optimize the app preventing it to re-render each time a state is changed (if the change does not affect ItemList)
const ItemList = memo(
  () => {

    const [prod, setProd] = useState([]);
    const [myFilteredArray, setMyFilteredArray] = useState([]);
    const {category} = useParams();

    //TODO: Change below to a async/await
    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'products');
      getDocs(queryCollection)
      .then(resp => setProd(resp.docs.map(item => ({ id:item.id, ...item.data()}))));
    },[]);

    useEffect(() => {
      setMyFilteredArray(prod.filter(el => el.category === category));
    },[category]);

    return(
      <div className='itemList'>
        {(category===undefined)? (prod.map((element) => <Item data={element} key={element.id}/>)) : (myFilteredArray.map(element => <Item data={element} key={element.id}/>))}
      </div>
    );
  }
);

export default ItemList;
