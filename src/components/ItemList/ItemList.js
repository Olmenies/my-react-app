import './ItemList.css';
import Item from '../Item/Item';
import {getFetch, getFetchCategory} from '../../helpers/getFetch';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

const ItemList = () => {

  const [prod, setProd] = useState([]);
  const [array, setArray] = useState([]);
  const {category} = useParams();

  useEffect(() => {
    getFetch()
    .then(resp => {
      setProd(resp);
    })
    .catch(err => console.log(err))
  },[]);

  useEffect(() => {
    getFetchCategory(category)
    .then(resp => {
      setArray(resp);
    });
  },[category]);

  return(
    <div className='itemList'>
      {(category===undefined)? (prod.map((element) => <Item data={element} key={element.id}/>)) : (array.map(element => <Item data={element} key={element.id}/>))}
    </div>
  );
}

export default ItemList;
