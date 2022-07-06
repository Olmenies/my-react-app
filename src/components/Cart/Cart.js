import {useCartContext} from '../../contexts/cartContext';
import {useState, useEffect} from 'react';
import './Cart.css';

const Cart = () => {

  const {cart, deleteFromCart, getFullPrice} = useCartContext();
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setFullPrice(getFullPrice());
  },[getFullPrice]);

  return(
    <div className='cartDiv'>
      {cart.map(item => {
        return(
           <li key={item.id} className='cartLi'>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>{item.cantidad} unidad(es)</p>
            <img src={item.picture} alt="Item picture" className='cartImg'/>
            <button onClick={() => {
              deleteFromCart(item.id);
            }}>Eliminar</button>
          </li>
        );
      })}
      <h2>Total ${fullPrice}</h2>
    </div>
  );
}

export default Cart;
