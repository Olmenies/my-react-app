import {useState, createContext, useContext} from 'react';

//Provider
//export const CartContext = createContext([]);

//exportar la función con el useContext incluído permite ahorrar su importación en el resto de archivos
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

//Custom provider
export const CartContextProvider = ({children}) => { //todo lo que "encierro entre dos tags, pasa como prop children por defecto" (todo lo que envolví en App.js

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    const tempCart = [...cart];

    cart.length === 0 && setCart([...cart, item]);

    tempCart.map(el => {
      if(el.id === item.id){
        el.cantidad += item.cantidad;
      }

      let result = tempCart.find(x => x.id === item.id);

      if(!result){
        setCart([...tempCart, item]);
      }
    });

    //setCart([...tempCart, item]) //copiamos todo lo que tiene cart, sumando item -> Sería como hacer un push
  }

  const deleteFromCart = (item) => {
    setCart([...cart.filter(el => el.id !== item)]);
  }

  return(
    <CartContext.Provider
    value={{cart, addToCart, deleteFromCart}}
    >
    {children}
    </CartContext.Provider>
  );
}
