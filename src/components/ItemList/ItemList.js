import './ItemList.css';
import Item from '../Item/Item';
import {useState, useEffect, memo} from 'react';
import {useParams} from 'react-router-dom'
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const ItemList = memo(
  () => {

    const [prod, setProd] = useState([]);
    const [myFilteredArray, setMyFilteredArray] = useState([]);
    const {category} = useParams();

    //Hook to get an array of the products from Firebase
    useEffect(() => {
      const db = getFirestore();
      const queryCollection = collection(db, 'products');
      getDocs(queryCollection)
      .then(resp => setProd(resp.docs.map(item => ({ id:item.id, ...item.data()}))));
    },[]);

    //Hook to filter the products according their categories
    useEffect(() => {
      setMyFilteredArray(prod.filter(el => el.category === category));
    },[category, prod]);

    return(
      <div className='itemList'>
        {(category===undefined)? (prod.map((element) => <Item data={element} key={element.id}/>)) : (myFilteredArray.map(element => <Item data={element} key={element.id}/>))}
      </div>
    );
  }
);

export default ItemList;
