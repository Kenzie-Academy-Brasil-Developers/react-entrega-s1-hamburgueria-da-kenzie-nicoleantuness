import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Total from "./Total";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([])
  const [valueInput, setValueInput] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);
  
  function filterByName(filter) {
    setFilteredProduct([...products.filter((elem) => elem.name === filter || elem.category === filter)])
    setProducts(filteredProduct)
  }
  

  console.log(filteredProduct)

  function handleClick(id) {
    const product = products.find((elem) => elem.id === id)
    if(cartProducts.includes(product)) {
      prompt("Item já adcionado")
    }else{
      setCartProducts([...cartProducts, product])
    }
    
  }

  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>Burguer</h1>
          <p>Kenzie</p>
        </div>
        <div className="container-input">
          <input
            placeholder="Digitar pesquisa"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
          ></input>

          <button onClick={() => filterByName(valueInput)}>
            Pesquisar
          </button>
        </div>
      </header>
      <div className="container">
      <main>
        <ProductList
          products={products}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          filteredProduct={filteredProduct}
          setFilteredProduct={setFilteredProduct}
          handleClick={handleClick}
        />

      </main>
      <section>
        <div className="header-cart">
          <h2>Carrinho de compras</h2>
        </div>
        {cartProducts.map((product, index) => (
          <Cart product={product} cartProducts={cartProducts} />
        ))}
        {cartProducts.length === 0 ? (
          <div className="cart-vazio">
            <h1>Sua sacola está vazia</h1>
            <p>Adcione itens</p>
          </div>
        ) : (
          <div className="container-total">
            <div className="wrapper-total">
              <h2>Total</h2>
              <Total cartProducts={cartProducts} />
            </div>
            <div className="button-remove">
              <button
                className="remove-all"
                onClick={() => setCartProducts([])}>
                Remover todos
              </button>
            </div>
          </div>
        )}
      </section>
      </div>
    </div>
  );
}

export default App;
