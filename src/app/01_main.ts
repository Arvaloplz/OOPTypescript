import { Product } from './models/product.model';
import axios from 'axios';

//* Nuestro fichero solo ejecuta esta función async
(async () => {
  async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    // * forzando el tipado
    // * data as Product[]
    return data;
  }
  console.log('--'.repeat(20));
  const rpt2 = await getProducts();
  console.log(rpt2.map((x) => x.title));
})();
