export const GetBasketTotal = ({ basket }) => {
  const total = basket.reduce((acc, item) => acc + item.price, 0);

  return <h3> {total}</h3>;
};
