function Cart({ product, cartProducts, setCartProducts }) {
 const removeProduct = () => {
    const updatedCart = cartProducts.filter((p) => p.id !== product.id);
    
    setCartProducts(updatedCart)
 }
    return(
        <>
        <li key={product.id} className="container-cart">
            <img src={product.img} alt="" />
            <div className="wrapper-cart">
                <div className="description-cart">
                    <h1>{product.name}</h1>
                    <button onClick={removeProduct}>Remover</button>
                </div>
                <p>{product.category}</p>
            </div>
        </li>
        </>
    )
}

export default Cart