import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Product } from '@/sdk/product';

export interface ProductCart extends Product {
  quantity: number;
}

type MinicartContextType = {
  products: ProductCart[];
  functions: {
    addProduct: (product: ProductCart) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    removeProduct: (productId: number) => void;
    clearMinicart: () => void;
    hasProduct: (productId: number) => ProductCart | null;
  };
  auxiliar: {
    totalProducts: number;
  };
  totalizers: {
    total: number;
  };
};

const initialValue: MinicartContextType = {
  products: [],
  functions: {
    addProduct: () => {},
    updateQuantity: () => {},
    removeProduct: () => {},
    clearMinicart: () => {},
    hasProduct: () => null,
  },
  auxiliar: {
    totalProducts: 0,
  },
  totalizers: {
    total: 0,
  },
};

export const MinicartContext = createContext<MinicartContextType>(initialValue);

export const MinicartProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductCart[]>([]);

  const totalProducts = products.length;
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }, [products]);

  const handleAddProduct = (product: ProductCart) => {
    const productIndex = products.findIndex((item) => item.id === product.id);

    if (productIndex === -1) {
      setProducts([...products, product]);
    } else {
      const updatedProducts = [...products];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity: updatedProducts[productIndex].quantity + product.quantity,
      };

      setProducts(updatedProducts);
    }
  };

  const productIsInCart = (productId: number): ProductCart | null => {
    return products.find((item) => item.id === productId) || null;
  };

  const handleRemoveProduct = (productId: number) => {
    const productIndex = products.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts.splice(productIndex, 1);

      setProducts(updatedProducts);
    }
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    const productIndex = products.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity,
      };

      setProducts(updatedProducts);
    }
  };

  const handleClearProducts = () => {
    setProducts([]);
  };

  useEffect(() => {
    const localProducts = localStorage.getItem('wefit:cart');

    if (localProducts) {
      setProducts(JSON.parse(localProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wefit:cart', JSON.stringify(products));
  }, [products]);

  return (
    <MinicartContext.Provider
      value={{
        products: products,
        functions: {
          addProduct: handleAddProduct,
          updateQuantity: handleUpdateQuantity,
          removeProduct: handleRemoveProduct,
          clearMinicart: handleClearProducts,
          hasProduct: productIsInCart,
        },
        auxiliar: {
          totalProducts: totalProducts,
        },
        totalizers: {
          total: total,
        },
      }}
    >
      {children}
    </MinicartContext.Provider>
  );
};
