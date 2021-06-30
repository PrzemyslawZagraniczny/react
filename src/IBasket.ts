type Dispatch<A> = (value: A) => void;

export interface IBasket {
  id: number;
  product: number;
  session: number;
  pieces: number;
}
export type IBasketContextState = {
  basket: IBasket[];
}