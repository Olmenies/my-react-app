import {useCartContext} from '../../contexts/cartContext';
import {useState, useEffect} from 'react';
import {addDoc, collection, doc, getFirestore, updateDoc} from 'firebase/firestore';
import './Cart.css';

const Cart = () => {

  const {cart, deleteFromCart, getFullPrice, emptyCart} = useCartContext();
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setFullPrice(getFullPrice());
  },[getFullPrice]);

  function generateOrder(e) {
    let order = {};

    order.buyer = {name: 'coco', email:'cumbiancha.volante@mymail.com', phone:'123456789'};
    order. total = fullPrice;

    order.items = cart.map(cartItem => {
      const id = cartItem.id;
      const title = cartItem.title;
      const price = cartItem.price * cartItem.cantidad;

      return (id, title, price);
    });

    console.log(order);

    const db = getFirestore();

    //Agregamos un elemento
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order) //si no existe la collection, la crea
    .then(resp => console.log(resp));

    //Modificamos un elemento
    const updateCollection = doc(db, 'products', 'HEVngeeLRP2nC1RHkGMM');
    updateDoc(updateCollection, {
      stock:20
    })
    .then(resp => console.log('Actualizado'));
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
