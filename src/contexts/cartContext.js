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
    setCart([...cart, item]) //copiamos todo lo que tiene cart, sumando item -> Sería como hacer un push
  }

  return(
    <CartContext.Provider
      value={{cart, addToCart}}
    >
      {children}
    </CartContext.Provider>
  );
}
