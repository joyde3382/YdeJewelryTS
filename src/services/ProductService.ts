import { IDetailedProduct } from "../models/IDetailProduct";
const Cosmic = require("cosmicjs");

export interface IProductService {
  getAllProducts: () => Promise<IDetailedProduct[]>;
}

export class ProductService implements IProductService {
  private bucket = {} as any;

  constructor() {
    const api = Cosmic();
    this.bucket = api.bucket({
      slug: "ydesjewelry",
      read_key: "XfTQ704vHuIHKsXScpsGGOt2WcFeNhz9EH9ns1RSBwLDEiD0Tv",
    });
  }

  public async getAllProducts(): Promise<IDetailedProduct[]> {
    const data = await this.bucket.getObjects({
      type: "products",
      limit: 20,
    });

    console.log(data.objects[0].metadata as IDetailedProduct[]);
    return [
      data.objects[0].metadata,
      data.objects[1].metadata,
    ] as IDetailedProduct[];
  }
}
