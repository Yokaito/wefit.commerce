import { useContext } from 'react';
import { MinicartContext } from './Provider';

export const useMiniCart = () => {
  return useContext(MinicartContext);
};
