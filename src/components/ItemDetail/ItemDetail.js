import {useCartContext} from '../../contexts/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({data}) => {
  const {title, description, stock, price, picture} = data;

  const {addToCart} = useCartContext();

  //Function to get the quantity of items from a child element
  const sendElementToParent = (quant) => {
    addToCart({...data, cantidad:quant});
  }

  return(
    <div>
        <div>
          <h2>{title}</h2>
        </div>
      <div className='itemDetail'>
        <div className='itemDetailChildDiv'>
          <img className='itemDetailImage' src={picture} alt='Imagen de prueba'/>
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
