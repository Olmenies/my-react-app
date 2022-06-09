import './ItemList.css';
import Item from '../Item/Item';

const myData =
[
  {id:1, title:"Pez betta", price:2000, picture:"prueba"},
  {id:2, title:"Pez oscar", price:10000, pricture:"prueba"},
  {id:2, title:"Pez arlequín", price:10000, pricture:"prueba"},
  {id:2, title:"Pez neon", price:10000, pricture:"prueba"},
  {id:2, title:"Pez goldfish", price:10000, pricture:"prueba"}
];

const ItemList = () => {
  return(
    <div style={{display:"flex", justifyContent:"space-around"}}>
      {myData.map((element) => <Item data={element} key={element.id}/>)}
    </div>
  );
}

export default ItemList;
