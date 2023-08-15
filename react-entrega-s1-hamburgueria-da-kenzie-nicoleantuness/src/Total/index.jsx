function Total({ cartProducts }) {
  return (
    <>
      <p>
        R$
        {cartProducts.reduce((valorAtual, valorAnterior) => {
          const valorTotal = valorAtual + valorAnterior.price;
          const valorTotalArredondado = parseFloat(valorTotal.toFixed(2))
          return valorTotalArredondado
        }, 0)}
      </p>
    </>
  );
}

export default Total;
