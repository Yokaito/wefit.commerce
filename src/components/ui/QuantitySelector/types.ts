export type QuantitySelectorProps = {
  removeQuantity: () => void;
  addQuantity: () => void;
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  quantity: number;
};
