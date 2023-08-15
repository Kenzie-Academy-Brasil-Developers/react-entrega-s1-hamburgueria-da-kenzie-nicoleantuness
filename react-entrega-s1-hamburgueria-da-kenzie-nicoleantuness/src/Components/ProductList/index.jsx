import Product from '../Product'

function ProductList({ products, filteredProduct, handleClick }) {
    return (
        <>
            <ul>
                {
                    filteredProduct.length > 0  ? filteredProduct.map((elem, index) => 
                    (<Product key={elem} elem={elem} handleClick={handleClick} />)
                    ) :
                    products?.map((elem, index) => 
                   (<Product key={index} elem={elem} handleClick={handleClick} />)
                   ) 
                }
            </ul>
        </>
    )
}

export default ProductList