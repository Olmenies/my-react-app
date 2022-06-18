import {useState} from 'react';

import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({data}) => {
  const {id, title, stock, price, picture} = data;
  const [element, setElement] = useState(0);

  const sendElementToParent = (cumbia) => {
    setElement(element);
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
        <p>The oscar is a species of fish from the cichlid family known under a variety of common names, including tiger oscar, velvet cichlid, and marble cichlid. In tropical South America, where the species naturally resides, A. ocellatus specimens are often found for sale as a food fish in the local markets.</p>
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
