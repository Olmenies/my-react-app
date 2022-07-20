import {useState, createContext, useContext} from 'react';

//Instantiate a context
const CartContext = createContext([]);

//Export our custom context
export const useCartContext = () => useContext(CartContext);

//Custom provider
export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  //Function to add an item to our cart
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
  }

  //Function to delete an item from our cart
  const deleteFromCart = (item) => {
    setCart([...cart.filter(el => el.id !== item)]);
  }

  //Function to get the full price of the whole price
  const getFullPrice = () => {

    let fullPrice = 0;

    cart.forEach(item => {
      fullPrice += parseInt(item.price) * parseInt(item.cantidad);
    });

    return fullPrice;
  }

  //Function to delete all items of our cart
  const emptyCart = () => {
    setCart([]);
  }

  return(
    <CartContext.Provider
      value={{cart, addToCart, deleteFromCart, getFullPrice, emptyCart}}
    >
    {children}
    </CartContext.Provider>
  );
}
