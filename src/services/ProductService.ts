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
    // let cachedData = window.localStorage.getItem("uniquedatakey");
    // let currentTime = new Date();
    // Set timestate on data when saving to local storage => done
    // check current time against local cache time
    // compare dates if current is fx more than 1h old else get new data

    const data = await this.bucket.getObjects({
      type: "products",
      limit: 20,
    });

    data.time = new Date();
    window.localStorage.setItem("uniquedatakey", JSON.stringify(data));
    
    return [
      data.objects[0].metadata,
      data.objects[1].metadata,
    ] as IDetailedProduct[];
  }
}
