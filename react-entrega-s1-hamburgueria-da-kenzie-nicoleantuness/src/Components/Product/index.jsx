
function Product({ elem, handleClick }) {

  return (
    <li >
      <div className="container-img">
        <img src={elem.img} alt="" />
      </div>
      
      <h2>{elem.name}</h2>
      <p className="category">{elem.category}</p>
      <p className="price">R${elem.price}</p>
      <button
        onClick={() => handleClick(elem.id)}>Adcionar</button>
        
    </li>
  );
}

export default Product;
