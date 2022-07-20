import {useCartContext, emptyCart} from '../../contexts/cartContext';
import {useState, useEffect} from 'react';
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore';
import './Cart.css';

const Cart = () => {

  const {cart, deleteFromCart, getFullPrice, emptyCart} = useCartContext();
  const [fullPrice, setFullPrice] = useState(0);

  //Hook to refresh the whole cart price each time it's updated
  useEffect(() => {
    setFullPrice(getFullPrice());
  },[getFullPrice]);

  //Function to generate a new order based on what we have on the Cart
  function generateOrder(e) {
    let order = {};

    order.buyer = {name: 'Janis Joplin', email:'janis.joplin@rockmail.com', phone:'123456789'};
    order. total = fullPrice;

    order.items = cart.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.cantidad;

      return (id, title, price);
    });

    const db = getFirestore();

    //Function to add an order to the 'orders' Firebase collection
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
    .then(resp => window.alert(`Su orden de compra para seguimiento es: ${resp.id}`))
    .then(emptyCart);
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
            <button onClick={() => {
              deleteFromCart(item.id);
            }}>Eliminar</button>
          </li>
        );
      })}
      <h2>Total ${fullPrice}</h2>
      <div>
      <button onClick={generateOrder}>Terminar compra</button>
      <button onClick={() => emptyCart()}>Vaciar carrito</button>
      </div>
    </div>
  );
}

export default Cart;
