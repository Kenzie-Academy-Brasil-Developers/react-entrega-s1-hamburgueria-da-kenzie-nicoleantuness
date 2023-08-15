import Product from '../Product'

function ProductList({products, filteredProduct ,setFilteredProduct, handleClick }) {

    return (
        <>
            <ul>
                {
                    products?.map((elem, index) => 
                   (<Product elem={elem} handleClick={handleClick} />)
                   ) 
                }
            </ul>
        </>
    )
}

export default ProductList