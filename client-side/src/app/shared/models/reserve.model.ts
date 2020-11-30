export interface IReserve {
  code: number;
  valid: boolean;
  product_name: string;
  product_brand: string;
  quantity: number;
  id?: string;
  expiringIn?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Reserve implements IReserve {
  constructor(
    public code: number,
    public product_name: string,
    public product_brand: string,
    public valid: boolean,
    public quantity: number,
    public id?: string,
    public expiringIn?: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {
    this.product_name = product_name ? product_name : null;
    this.code = code ? code : null;
    this.quantity = quantity ? quantity : null;
    this.product_brand = product_brand ? product_brand : null;
    this.valid = valid ? valid : null;
    this.expiringIn = expiringIn ? expiringIn : null;
    this.createdAt = createdAt ? createdAt : null;
    this.updatedAt = updatedAt ? updatedAt : null;
  }
}
