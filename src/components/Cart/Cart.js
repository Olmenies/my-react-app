import {useCartContext} from '../../contexts/cartContext';

const Cart = () => {

  const {cart} = useCartContext();

  return(
    <div className='cumbia'>
      {cart.map(item => {
        return(
           <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </li>
        );
      })}
    </div>
  );
}

export default Cart;
