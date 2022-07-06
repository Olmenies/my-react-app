import Cart from '../Cart/Cart';
import EmptyCart from  '../EmptyCart/EmptyCart';
import {useCartContext} from '../../contexts/cartContext';
import {useState, useEffect} from 'react';

const CartContainer = () => {

  const {cart} = useCartContext();
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  useEffect(() => {
    if(cart.length === 0) {
      setIsEmptyCart(true);
    } else {
      setIsEmptyCart(false);
    }
  },[cart.length]);

  return(
    <div>
     {isEmptyCart ? <EmptyCart/> : <Cart data={cart}/>}
    </div>
  );
}

export default CartContainer;
