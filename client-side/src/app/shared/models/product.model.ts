export interface IProduct {
  code: number;
  product_name?: string;
  quantity?: number;
  username?: string;
  groupProduct?: boolean;
  productNote?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Product implements IProduct {
  constructor(
    public code: number,
    public product_name?: string,
    public quantity?: number,
    public username?: string,
    public groupProduct?: boolean,
    public productNote?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {
    this.product_name = product_name ? product_name : null;
    this.code = code ? code : null;
    this.quantity = quantity ? quantity : null;
    this.groupProduct = groupProduct ? groupProduct : null;
    this.productNote = productNote ? productNote : null;
    this.username = username ? username : null;
    this.createdAt = createdAt ? createdAt : null;
    this.updatedAt = updatedAt ? updatedAt : null;
  }
}
