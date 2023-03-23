export const usePriceFormatter = () => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return (price: number) => formatter.format(price);
};

export default usePriceFormatter;
