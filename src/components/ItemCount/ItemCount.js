import {useState} from 'react';
import {NavLink} from 'react-router-dom';

const ItemCount = ({sendElementToParent, stock, initial}) => {

  const [count, setCount] = useState(parseInt(initial));
  const [isReady, setIsReady] = useState(false)

  const add = () => {
    count < stock && setCount(count+1);
  }

  const subtract = () => {
    count > 0 && setCount(count-1)
  }

  const confirmPurchase = () => {
    alert(`Se compraron: ${count} unidades`);
  }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <button onClick={subtract}>-</button>
        <p>{count}< /p>
        <button onClick={add}>+</button>
      </div>
      {(isReady)? <NavLink to='/Cart'><button>Ir al carrito</button></NavLink> : <button onClick={() => {
        setIsReady(true);
        sendElementToParent(count)
      }}>Agregar al carrito</button>}
    </div>
  );
}

export default ItemCount;
