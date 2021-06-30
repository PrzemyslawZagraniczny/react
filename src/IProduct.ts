type Dispatch<A> = (value: A) => void;

export interface IProduct {
  id: number;
  category: number;
  color: number;
  name: string;
  description: string;
}
export type IProductContextState = {
  basket: IProduct[];
}