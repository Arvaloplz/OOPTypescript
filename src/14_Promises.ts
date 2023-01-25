import axios from 'axios';
//* Nuestro fichero solo ejecuta esta función async
(async () => {
  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }
  async function getAsyncProducts() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }
  console.log('--'.repeat(20));
  const rpt = await getProducts();
  console.log(rpt.data);
  const rpt2 = getAsyncProducts();
  console.log(rpt2);
})();
