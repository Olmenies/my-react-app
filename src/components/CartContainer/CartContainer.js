import Cart from '../Cart/Cart';
import EmptyCart from  '../EmptyCart/EmptyCart';
import {useCartContext} from '../../contexts/cartContext';
import {useState, useEffect} from 'react';

const CartContainer = () => {

  const {cart} = useCartContext();
  const [isEmptyCart, setIsEmptyCart] = useState(true);

  //Hook to define if we have to render the cart content or not based in the cart's content
  useEffect(() => {
    cart.length === 0? setIsEmptyCart(true) : setIsEmptyCart(false);
  },[cart.length]);

  return(
    <div>
     {isEmptyCart ? <EmptyCart/> : <Cart data={cart}/>}
    </div>
  );
}

export default CartContainer;
