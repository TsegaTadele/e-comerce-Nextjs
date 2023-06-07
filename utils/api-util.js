import axios from 'axios';

export async function getProductByid(productId) {
  return await axios.get(`/api/products/${productId}`);
}
