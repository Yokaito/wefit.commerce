import { Product } from '../product';
import axios from 'axios';

export const getProducts = (): Promise<{
  products: Product[];
}> => axios.get('/api/products').then((res) => res.data);
