import { ProductHttpService } from './service/produc-http.service';

(async () => {
  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(5));
    const products = await productService.getAll();
    console.log(products.length);
    const productId = products[3].id;
    console.log('--'.repeat(5));
    console.log('update');
    await productService.update(productId, {
      price: 321,
      title: 'Producto weno',
      description: 'el mejor producto precio calidad del mercado',
    });
    console.log('--'.repeat(5));
    console.log('findOne');
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }
})();
