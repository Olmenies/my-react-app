import {useCartContext} from '../../contexts/cartContext';

import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({data}) => {
  const {title, description, stock, price, picture} = data;

  const {cart, addToCart} = useCartContext();


  const sendElementToParent = (cant) => {
    addToCart({...data, cantidad:cant}); //spread para generar desestructurar los campos de data
  }

  return(
    <div>
        <div>
          <h2>{title}</h2>
        </div>
      <div className='itemDetail'>
        <div className='itemDetailChildDiv'>
          <img src={picture} alt='Imagen de prueba'/>
        </div>
        <div className='itemDetailChildDiv'>
          <p>{description}</p>
        </div>
        <div className='itemDetailChildDiv'>
          <h3>Precio unitario: ${price}</h3>
          <ItemCount sendElementToParent={sendElementToParent} stock={stock} initial='1'/>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
