export namespace TECommerce {
  export interface IProduct {
    id?: number;
    image: string;
    color: string;
    name: string;
    origin?: number;
    price: number;
    colors: string[];
  }

  export interface ICollection {
    id?: number;
    category: string;
    desc: string;
    image: string;
  }
}
