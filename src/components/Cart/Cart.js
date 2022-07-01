import {useCartContext} from '../../contexts/cartContext';
import './Cart.css';

const Cart = () => {

  const {cart} = useCartContext();

  const test = () => {
    console.log("cumbia");
  }

  return(
    <div className='cartDiv'>
      {cart.map(item => {
        return(
           <li key={item.id} className='cartLi'>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>{item.cantidad} unidad(es)</p>
            <img src={item.picture} alt="Item picture" className='cartImg'/>
            <button onClick={test} >Eliminar</button>
          </li>
        );
      })}
    </div>
  );
}

export default Cart;
