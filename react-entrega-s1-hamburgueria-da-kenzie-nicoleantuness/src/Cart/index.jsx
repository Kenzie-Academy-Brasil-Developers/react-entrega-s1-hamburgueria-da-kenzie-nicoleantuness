function Cart({product}) {
 
    return(
        <>
        <li key={product.id} className="container-cart">
            <img src={product.img} alt="" />
            <div className="wrapper-cart">
                <div className="description-cart">
                    <h1>{product.name}</h1>
                    <button>Remover</button>
                </div>
                <p>{product.category}</p>
            </div>
        </li>
        </>
    )
}

export default Cart