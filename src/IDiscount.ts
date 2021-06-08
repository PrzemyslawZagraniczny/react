type Dispatch<A> = (value: A) => void;

export interface IDiscount {
  id: number;
  name: string;
  value: number;
}

export type IShopContextState = {
  discounts: IDiscount[];
}