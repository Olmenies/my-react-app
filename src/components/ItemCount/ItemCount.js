import {useState} from 'react';

const ItemCount = ({stock, initial}) => {

  const [count, setCount] = useState(parseInt(initial));

  const add = () => {
    count < stock && setCount(count+1);
  }

  const subtract = () => {
    count > 0 && setCount(count-1);
  }

  const confirmPurchase = () => {
    alert(`Se compraron: ${count}`);
  }

  return (
    <div style={{border:"solid 2px black"}}>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <button onClick={subtract}>-</button>
        <p>{count}</p>
        <button onClick={add}>+</button>
      </div>
      <button onClick={confirmPurchase}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount
