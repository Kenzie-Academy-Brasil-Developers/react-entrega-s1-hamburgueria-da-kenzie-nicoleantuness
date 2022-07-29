function Total({ cartProducts }) {
  return (
    <>
      <p>
        R$
        {cartProducts.reduce((valorAtual, valorAnterior) => {
          return valorAtual + valorAnterior.price;
        }, 0)}
      </p>
    </>
  );
}

export default Total;
