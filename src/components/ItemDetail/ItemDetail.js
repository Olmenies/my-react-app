import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data}) => {
  const {id, title, price, picture} = data;

  return(
    <div style={{border:"solid 2px maroon"}}>
      <h2>{title}</h2>
      <img src="" alt="Imagen de prueba"/>
      <p>{price}</p>
      <ItemCount stock="10" initial="1"/>
    </div>
  );
}

export default ItemDetail;
