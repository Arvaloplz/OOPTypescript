import { Product } from './../models/product.model';
import axios from "axios";
import { Category } from '../models/category.model';

export class baseHttpService <TypeClass>{
    constructor(private url:string){}
    async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}
(async ()=>{
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const productService = new baseHttpService<Product>(url1);
  const rspns = await productService.getAll()
  const categorieService = new baseHttpService<Category>(url2);
  const rspns2 = await categorieService.getAll();

  console.log('Product: ',rspns.length)
  console.log('Categorie: ',rspns2.length)
})()
